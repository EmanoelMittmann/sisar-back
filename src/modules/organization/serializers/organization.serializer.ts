import { ListEstablishmentDto } from "../dto/list-establishment.dto";
import { OrganizationEntity } from "../entities/organization.entity";


export class OrganizationSerializer {
    toList(organization: OrganizationEntity): ListEstablishmentDto {
        return {
            uuid: organization.getUuid(),
            name: organization.getSocialName(),
            image_path: organization.getImagePath()
        }
    }

    toListAll(organization: OrganizationEntity[]): ListEstablishmentDto[] {
        return organization.map(this.toList)
    }
}