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

export interface IOrganizationReflection {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  uuid: string;
  social_name: string;
  fantasy_name: string;
  cnpj: string;
  email: string;
  phone: string;
  is_active: boolean;
  office: string;
  image_path: string | null;
  inactiveAt: Date | null;
  userId: number;
}

export class OrganizationSerializer {
  toReflectionEntity(input: IOrganizationReflection): OrganizationEntity {
    const organization = new OrganizationEntity();
    organization.setId(input.id);
    organization.setUuid(input.uuid);
    organization.setSocialName(input.social_name);
    organization.setCnpj(input.cnpj);
    organization.setEmail(input.email);
    organization.setPhone(input.phone);
    organization.setIsActive(input.is_active);
    organization.setOffice(input.office);
    if (input.image_path) {
      organization.setImagePath(input.image_path);
    }
    organization.setCreatedAt(input.createdAt);
    organization.setUpdatedAt(input.updatedAt);
    if (input.inactiveAt) {
      organization.setInactiveAt(input.inactiveAt);
    }
    return organization;
  }

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
