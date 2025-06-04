import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';

export interface IListAll {
  uuid: string;
  social_name: string;
  image_path: string | null;
}

export interface IFindByUser {
  uuid: string;
  social_name: string;
  cnpj: string;
  email: string;
  phone: string;
  office: string;
  image_path: string | null;
}

export class OrganizationSerializer {
  toEntity(input: IListAll): OrganizationEntity {
    const organization = new OrganizationEntity();
    organization.setUuid(input.uuid);
    organization.setSocialName(input.social_name);
    if (input.image_path) {
      organization.setImagePath(input.image_path);
    }
    return organization;
  }

  toManyEntity(input: IListAll[]): OrganizationEntity[] {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return input.map(this.toEntity);
  }

  toOnlyUuid(uuid: string): OrganizationEntity {
    const organization = new OrganizationEntity();
    organization.setUuid(uuid);
    return organization;
  }

  transformToEntity(input: IFindByUser): OrganizationEntity {
    const organization = new OrganizationEntity();
    organization.setUuid(input.uuid);
    organization.setSocialName(input.social_name);
    organization.setCnpj(input.cnpj);
    organization.setEmail(input.email);
    organization.setPhone(input.phone);
    organization.setOffice(input.office);
    if (input.image_path) {
      organization.setImagePath(input.image_path);
    }
    return organization;
  }
}
