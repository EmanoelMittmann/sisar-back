import { IFindByUser } from '../dto/find-by-user.dto';
import { ListEstablishmentDto } from '../dto/list-establishment.dto';
import { OrganizationEntity } from '../entities/organization.entity';

export class OrganizationSerializer {
  toList(organization: OrganizationEntity): ListEstablishmentDto {
    return {
      uuid: organization.getUuid(),
      name: organization.getSocialName(),
      image_path: organization.getImagePath(),
    };
  }

  toListAll(organization: OrganizationEntity[]): ListEstablishmentDto[] {
    return organization.map(this.toList);
  }

  toOrganizationByUser(entity: OrganizationEntity): IFindByUser {
    return {
      uuid: entity.getUuid(),
      social_name: entity.getSocialName(),
      cnpj: entity.getCnpj(),
      email: entity.getEmail(),
      phone: entity.getPhone(),
      office: entity.getOffice(),
      image_path: entity.getImagePath(),
    };
  }
}
