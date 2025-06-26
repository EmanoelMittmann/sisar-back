import { BaseService } from 'src/shared/contracts';
import { AssociateUserToPlanDto } from '../dto/associate-user-to-plan.dto';
import {
  BadGatewayException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/postgres/prisma/prisma.service';
import {
  IChargeResponse,
  ICustomerResponse,
} from 'src/infrastructure/gateways/asaas/_contracts-response';
import { ChargeAsaasException } from 'src/shared/exceptions/charge-asaas.exception';
import { ClientAsaasException } from 'src/shared/exceptions/client-asaas.exception';

@Injectable()
export class CreateChargeWithInstallmentsService
  implements BaseService<AssociateUserToPlanDto, { link: string }>
{
  private logger = new Logger(CreateChargeWithInstallmentsService.name);
  constructor(private prisma: PrismaService) {}

  async execute(args: AssociateUserToPlanDto): Promise<{ link: string }> {
    this.logger.log(
      `Creating charge with installments for user ${args.userId} and plan ${args.planId}`,
    );

    const data = await this.prisma.$transaction(
      async (prisma) => {
        const { userId, planId } = args;

        if (!userId || !planId) {
          throw new NotFoundException('Usuário ou Plano Não Encontrado');
        }

        const plan = await prisma.plan.findFirst({
          where: {
            uuid: planId,
          },
          select: {
            organizationId: true,
            quantityInstallment: true,
            dueDate: true,
            price: true,
          },
        });

        if (!plan) {
          throw new NotFoundException('Plano Não Encontrado');
        }

        const credential = await prisma.organizationAsaasAccount.findFirst({
          where: {
            organizationId: plan.organizationId,
          },
          select: {
            apiKey: true,
          },
        });

        if (!credential) {
          throw new NotFoundException('Credenciais Asaas Não Encontradas');
        }

        const createdAssociation = await this.prisma.userPlans.create({
          data: {
            plan: {
              connect: {
                uuid: planId,
              },
            },
            user: {
              connect: {
                uuid: userId,
              },
            },
          },
          include: {
            user: true,
          },
        });

        const customer = await this.createCustomerAsaas(
          createdAssociation.user.name,
          createdAssociation.user.cpf,
          credential.apiKey,
          createdAssociation.user.email,
        );

        const data = await this.createChargeWithInstallments(
          plan.price,
          plan.quantityInstallment,
          customer.id,
          new Date(plan.dueDate as Date),
          credential.apiKey,
        );

        if (!data.invoiceUrl) {
          throw new ChargeAsaasException('Erro ao criar cobrança com parcelas');
        }

        return data.invoiceUrl;
      },
      {
        timeout: 10000, // 10 seconds
        maxWait: 15000, // 15 seconds
      },
    );

    return {
      link: data,
    };
  }

  normalizeValue(value: number): number {
    return value / 100;
  }

  private async createCustomerAsaas(
    name: string,
    cpf: string,
    credential: string,
    email?: string,
  ) {
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

  private async createChargeWithInstallments(
    value: number,
    installments: number,
    customerId: string,
    dueDate: Date,
    credential: string,
  ): Promise<IChargeResponse> {
    try {
      this.logger.log(
        `Creating charge with installments for customer ${customerId}`,
      );

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
            value: this.normalizeValue(value),
            billingType: 'CREDIT_CARD',
            totalValue: this.normalizeValue(value),
            installmentCount: installments,
            dueDate: dueDate,
          }),
        },
      );

      if (request.ok) {
        const response = (await request.json()) as IChargeResponse;

        return response;
      }

      await this.prisma.paymentsExceptions.create({
        data: {
          input: JSON.stringify({ value, installments, customerId, dueDate }),
          reason: JSON.stringify(await request.json()),
        },
      });
      throw new ChargeAsaasException(
        `Error creating charge with installments: ${await request.json()}`,
      );
    } catch (error) {
      this.logger.error(`Error creating charge with installments: ${error}`);
      throw new ChargeAsaasException(
        `Não foi possível criar a cobrança com parcelas`,
      );
    }
  }
}
