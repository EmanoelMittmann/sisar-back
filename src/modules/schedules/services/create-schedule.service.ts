import {
  BadGatewayException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { BaseService } from 'src/shared/contracts';
import {
  CreateScheduleDto,
  CreateScheduleServiceDto,
} from '../dtos/create-schedule.dto';
import { ScheduleEntity } from '../entities/schedule.entity';
import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import Redis from 'ioredis';
import { REMEMBER_USER_KEY } from 'src/shared/keys/remember-user.key';
import { SCHEDULE_USER_KEY } from 'src/shared/keys/schedule-user.key';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import {
  IChargeResponse,
  ICustomerResponse,
} from 'src/infrastructure/gateways/asaas/_contracts-response';
import { PrismaService } from 'src/infrastructure/postgres/prisma/prisma.service';
import { ClientAsaasException } from 'src/shared/exceptions/client-asaas.exception';
import { ChargeAsaasException } from 'src/shared/exceptions/charge-asaas.exception';

@Injectable()
export class CreateScheduleService
  implements BaseService<CreateScheduleServiceDto, { link: string }>
{
  private readonly logger = new Logger(
    `MAIN-${CreateScheduleService.name.toUpperCase()}`,
  );
  constructor(
    @Inject('RedisClient')
    private readonly redis_client: Redis,
    private prisma: PrismaService,
  ) {}

  async execute(input: CreateScheduleServiceDto): Promise<{ link: string }> {
    const { contract_date, remember_user, service_id, user_id, user_uuid } =
      input;

    const data = await this.prisma.$transaction(
      async (prisma) => {
        const existService = await prisma.service.findFirst({
          where: {
            uuid: service_id,
          },
          include: {
            organization: true,
          },
        });

        if (!existService) {
          throw new NotFoundException('Serviço não encontrado');
        }
        const credential = await prisma.organizationAsaasAccount.findFirst({
          where: {
            organizationId: existService.organization.id,
          },
          select: {
            apiKey: true,
          },
        });

        if (!credential) {
          throw new NotFoundException(
            'Credencial Asaas não encontrada para a empresa',
          );
        }

        const createdSchedule = await prisma.schedule.create({
          data: {
            contractAt: contract_date,
            rememberUser: remember_user,
            serviceId: existService.id,
            userId: user_id,
            organizationId: existService.organization.id,
          },
          include: {
            user: true,
            service: true,
          },
        });

        const customer = await this.createCustomerAsaas(
          createdSchedule.user.name,
          createdSchedule.user.cpf,
          credential.apiKey,
          createdSchedule.user.email,
        );

        const charge = await this.createCharge(
          this.normalizeValue(existService.price),
          customer.id,
          credential.apiKey,
          contract_date,
        );

        if (!charge || !charge.invoiceUrl) {
          throw new ChargeAsaasException('Erro ao criar cobrança no Asaas');
        }

        return charge.invoiceUrl;
      },
      {
        maxWait: 10000,
        timeout: 15000,
      },
    );

    if (remember_user) {
      await this.redis_client.lpush(REMEMBER_USER_KEY, user_uuid);
      await this.redis_client.set(
        SCHEDULE_USER_KEY(user_uuid),
        new Date(contract_date).toISOString(),
      );
    }

    return {
      link: data,
    };
  }
  normalizeValue(value: number): number {
    return value / 100;
  }
  private async createCharge(
    value: number,
    customerId: string,
    credential: string,
    dueDate: Date,
  ): Promise<IChargeResponse> {
    try {
      const request = await fetch(
        `${process.env.GATEWAY_ASAAS_BASE_URL}/payments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            access_token: credential,
          },
          body: JSON.stringify({
            customer: customerId,
            value,
            dueDate,
            billingType: 'CREDIT_CARD',
          }),
        },
      );

      if (request.ok) {
        const response = (await request.json()) as IChargeResponse;
        return response;
      }
      await this.prisma.paymentsExceptions.create({
        data: {
          input: JSON.stringify({ value, customerId, credential, dueDate }),
          reason: JSON.stringify(await request.json()),
        },
      });
      throw new BadGatewayException({
        message: 'Error creating charge in Asaas',
      });
    } catch (error) {
      throw new ClientAsaasException('Error creating charge in Asaas');
    }
  }

  private async createCustomerAsaas(
    name: string,
    cpf: string,
    credential: string,
    email?: string,
  ): Promise<ICustomerResponse> {
    try {
      const request = await fetch(
        `${process.env.GATEWAY_ASAAS_BASE_URL}/customers`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            access_token: credential,
          },
          body: JSON.stringify({
            name: name,
            cpfCnpj: cpf,
            email,
          }),
        },
      );

      if (request.ok) {
        const response = (await request.json()) as ICustomerResponse;

        return response;
      }
      await this.prisma.paymentsExceptions.create({
        data: {
          input: JSON.stringify({ name, cpf, credential, email }),
          reason: JSON.stringify(await request.json()),
        },
      });
      throw new BadGatewayException({
        message: 'Error creating customer in Asaas',
      });
    } catch (error) {
      throw new ClientAsaasException('Error creating customer in Asaas');
    }
  }
}
