import { Module } from '@nestjs/common';
import { OrganizationPostgresRepository } from 'src/infrastructure/postgres/repositories/organization.repository';
import { OrganizationController } from './controllers/organization.controller';
import { ListEstablishmentService } from './services/list-establishment.service';
import { FindOrganizationByAuthenticatedUserService } from './services/find-organization-by-authenticated-user.service';
import { GetBalanceOrganization } from './services/get_balace.service';
import { SaveImgOrganizationService } from './services/save-img-organization.service';
import { CreateSubAccountService } from './services/create-sub-account.service';
import { GatewaysModule } from 'src/infrastructure/gateways/gateways.module';

@Module({
  imports: [GatewaysModule],
  controllers: [OrganizationController],
  providers: [
    {
      provide: 'IOrganizationRepository',
      useClass: OrganizationPostgresRepository,
    },
    ListEstablishmentService,
    FindOrganizationByAuthenticatedUserService,
    GetBalanceOrganization,
    SaveImgOrganizationService,
    CreateSubAccountService,
  ],
  exports: ['IOrganizationRepository'],
})
export class OrganizationModule {}
