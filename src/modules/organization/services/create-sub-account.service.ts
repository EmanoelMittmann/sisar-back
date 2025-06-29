import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { IOrganizationRepository } from '../repositories/organization.repository';
import { IAbstractGatewayRepository } from 'src/shared/contracts/gateway-abstract.contract';
import { OrganizationEntity } from '../entities/organization.entity';
import { PrismaService } from 'src/infrastructure/postgres/prisma/prisma.service';

@Injectable()
export class CreateSubAccountService
  implements BaseService<{ uuid: string }, void>
{
  private logger = new Logger(CreateSubAccountService.name.toUpperCase());
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository,
    @Inject('IAbstractGatewayRepository')
    private readonly gatewayAsaasRepository: IAbstractGatewayRepository,
    private prisma: PrismaService,
  ) {}

  async execute(args: { uuid: string }): Promise<void> {
    try {
      const organization = await this.organizationRepository.findByUuid(
        args.uuid,
      );
      if (!organization) {
        this.logger.error('Organization not found');
        throw new NotFoundException({
          message: 'Organization not found',
        });
      }
      await this.createSubAccount(organization);
    } catch (error) {
      this.logger.error(`Error creating sub-account: ${error}`);
      throw new InternalServerErrorException({
        message: 'Error creating sub-account',
      });
    }
  }

  private async createSubAccount(organization: OrganizationEntity) {
    const subaccount = await this.gatewayAsaasRepository.create_sub_account({
      name: organization.getSocialName(),
      email: organization.getEmail(),
      cpfCnpj: organization.getCnpj(),
      mobilePhone: organization.getPhone(),
      incomeValue: 25000,
      address: 'Rua Fernando Orlandi',
      birthDate: '1990-01-01',
      addressNumber: '123',
      companyType: 'MEI',
      province: 'Centro',
      postalCode: '95585000',
    });
    await this.prisma.paymentsExceptions.create({
      data: {
        reason: JSON.stringify(subaccount),
      },
    });
    if (!subaccount || !subaccount.id) {
      this.logger.error('Failed to create sub-account in Asaas');
      throw new InternalServerErrorException({
        message: 'Failed to create sub-account in Asaas',
      });
    }
    await this.prisma.organizationAsaasAccount.create({
      data: {
        organizationId: organization.getId(),
        accountAsaasId: subaccount.id,
        apiKey: subaccount.apiKey,
        walletId: subaccount.walletId,
      },
    });
    this.logger.log(
      `Sub-account created successfully with ID: ${subaccount.id}`,
    );
  }
}
