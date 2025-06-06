import { Module } from '@nestjs/common';
import { OrganizationPostgresRepository } from 'src/infrastructure/postgres/repositories/organization.repository';
import { OrganizationController } from './controllers/organization.controller';
import { ListEstablishmentService } from './services/list-establishment.service';
import { FindOrganizationByAuthenticatedUserService } from './services/find-organization-by-authenticated-user.service';

@Module({
  controllers: [OrganizationController],
  providers: [
    {
      provide: 'IOrganizationRepository',
      useClass: OrganizationPostgresRepository,
    },
    ListEstablishmentService,
    FindOrganizationByAuthenticatedUserService,
  ],
  exports: ['IOrganizationRepository'],
})
export class OrganizationModule {}
