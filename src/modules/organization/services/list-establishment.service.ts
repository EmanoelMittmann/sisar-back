import { BaseService } from "src/shared/contracts/base-service.contract";
import { IOrganizationRepository } from "../repositories/organization.repository";
import { OrganizationEntity } from "../entities/organization.entity";
import { ListEstablishmentDto } from "../dto/list-establishment.dto";
import { OrganizationSerializer } from "../serializers/organization.serializer";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ListEstablishmentService implements BaseService<OrganizationEntity, ListEstablishmentDto[]> {
    constructor(
        @Inject('IOrganizationRepository')
        private readonly organizationRepository: IOrganizationRepository
    ) { }

    async execute(args: OrganizationEntity): Promise<ListEstablishmentDto[]> {
        const organizations = await this.organizationRepository.findAll()
        return new OrganizationSerializer().toListAll(organizations)
    }
}