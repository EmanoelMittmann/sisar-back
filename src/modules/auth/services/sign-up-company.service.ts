import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/postgres/prisma/prisma.service';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { IOrganizationRepository } from 'src/modules/organization/repositories/organization.repository';
import { BaseService } from 'src/shared/contracts';
import { IAbstractGatewayRepository } from 'src/shared/contracts/gateway-abstract.contract';

@Injectable()
export class SignUpCompanyService
  implements BaseService<OrganizationEntity, void>
{
  private logger = new Logger(SignUpCompanyService.name.toUpperCase());
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository,
    @Inject('IAbstractGatewayRepository')
    private readonly gatewayAsaasRepository: IAbstractGatewayRepository,
    private prisma: PrismaService,
  ) {}

  async execute(organization: OrganizationEntity): Promise<void> {
    try {
      const data = await this.organizationRepository.create(organization);
      await this.createSubAccount(data);
    } catch (error) {
      this.logger.error(`Error creating organization: ${error}`);
      throw new InternalServerErrorException({
        message: 'Error creating organization',
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
