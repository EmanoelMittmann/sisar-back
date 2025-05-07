import { OrganizationEntity } from "src/modules/organization/entities/organization.entity";

export interface IListAll {
    uuid: string;
    social_name: string;
    image_path: string | null;
}

export class OrganizationSerializer {
    toEntity(input: IListAll): OrganizationEntity {
        const organization = new OrganizationEntity()
        organization.setUuid(input.uuid)
        organization.setSocialName(input.social_name)
        if (input.image_path) {
            organization.setImagePath(input.image_path)
        }
        return organization
    }

    toManyEntity(input: IListAll[]): OrganizationEntity[] {
        return input.map(this.toEntity)
    }
}