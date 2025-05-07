import { Controller, Get } from "@nestjs/common";
import { ListEstablishmentDto } from "../dto/list-establishment.dto";
import { ListEstablishmentService } from "../services/list-establishment.service";
import { OrganizationEntity } from "../entities/organization.entity";


@Controller('organization')
export class OrganizationController {

    constructor(
        private readonly listEstablishmentService: ListEstablishmentService
    ) { }

    @Get()
    async list_establishment(): Promise<ListEstablishmentDto[]> {
        const organization = new OrganizationEntity()
        return this.listEstablishmentService.execute(organization)
    }
}