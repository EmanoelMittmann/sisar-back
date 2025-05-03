import { Module } from "@nestjs/common";
import { OrganizationPostgresRepository } from "src/infrastructure/postgres/repositories/organization.repository";

@Module({
    providers: [
        {
            provide: 'IOrganizationRepository',
            useClass: OrganizationPostgresRepository,
        }
    ],
    exports: [
        'IOrganizationRepository',
    ]
})
export class OrganizationModule { }