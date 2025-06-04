import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { UserEntity } from 'src/modules/users';
import { Role_Control } from 'src/shared/enum/role.enum';

export interface PrismaFindOneContract {
  name: string;
  id: number;
  uuid: string;
  email: string;
  phone: string;
  role: Role_Control;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  Organization?: {
    uuid: string;
    social_name: string;
  };
}

export class UserSerializer {
  static SerializeFindOne(input: PrismaFindOneContract) {
    const entity = new UserEntity();
    entity.setId(input.id);
    entity.setUuid(input.uuid);
    entity.setName(input.name);
    entity.setEmail(input.email);
    entity.setPhone(input.phone);
    entity.setPassword(input.password);
    entity.setRole(input.role);
    entity.setCreatedAt(input.createdAt);
    entity.setUpdatedAt(input.updatedAt);

    if (input.Organization) {
      const organization = new OrganizationEntity();
      organization.setUuid(input.Organization?.uuid);
      organization.setSocialName(input.Organization?.social_name);
      entity.setOrganization(organization);
    }
    return entity;
  }
}
