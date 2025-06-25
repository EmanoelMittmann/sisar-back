import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { ScheduleEntity } from 'src/modules/schedules/entities/schedule.entity';
import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { StatusSchedules } from 'src/shared/enum/status_schedules.enum';

export interface IScheduleDBReflection {
  id: number;
  uuid: string;
  userId: number;
  contractAt: Date;
  status: StatusSchedules;
  remember_user: boolean;
  created_at: Date;
  updated_at: Date;
  canceled_at: Date | null;
  organization: {
    uuid: string;
    social_name: string;
  };
  service: {
    uuid: string;
    name: string;
    price: number;
  };
}

export interface ISchedulePendingDBReflection {
  uuid: string;
  contractAt: Date;
  organization: {
    uuid: string;
    social_name: string;
  };
  user: {
    email: string;
  };
}
export interface ScheduleDetailDBReflection {
  id: number;
  contractAt: Date;
  description: string;
  status: string;
  service: {
    uuid: string;
    name: string;
    price: number;
    duration: string;
  };
  user: {
    name: string;
    email: string;
    phone: string;
    cpf: string;
  };
}

export class SchedulerSerializer {
  static toDetailEntity(data: ScheduleDetailDBReflection): ScheduleEntity {
    const entity = new ScheduleEntity();
    entity.setId(data.id);
    entity.setContractAt(data.contractAt);
    entity.setStatus(data.status as StatusSchedules);

    if (data.service) {
      const service = new ServiceEntity();
      service.setUuid(data.service.uuid);
      service.setName(data.service.name);
      service.setPrice(data.service.price);
      service.setDuration(data.service.duration);
      entity.setService(service);
    }

    if (data.user) {
      const user = new UserEntity();
      user.setName(data.user.name);
      user.setEmail(data.user.email);
      user.setPhone(data.user.phone);
      user.setCpf(data.user.cpf);
      entity.setUser(user);
    }

    return entity;
  }

  static toEntity(data: IScheduleDBReflection): ScheduleEntity {
    const entity = new ScheduleEntity();
    entity.setId(data.id);
    entity.setUuid(data.uuid);

    if (data.organization) {
      const organization = new OrganizationEntity();
      organization.setUuid(data.organization.uuid);
      organization.setSocialName(data.organization.social_name);
      entity.setOrganization(organization);
    }

    const service = new ServiceEntity();
    service.setUuid(data.service.uuid);
    service.setName(data.service.name);
    service.setPrice(data.service.price);
    entity.setService(service);

    const user = new UserEntity();
    user.setId(data.userId);
    entity.setUser(user);

    entity.setContractAt(data.contractAt);
    entity.setStatus(data.status);

    return entity;
  }

  static toManyEntity(data: IScheduleDBReflection[]): ScheduleEntity[] {
    return data.map(this.toEntity);
  }

  static toManyPendingEntity(
    data: ISchedulePendingDBReflection[],
  ): ScheduleEntity[] {
    return data.map(this.toPendingEntity);
  }

  static toPendingEntity(data: ISchedulePendingDBReflection): ScheduleEntity {
    const entity = new ScheduleEntity();
    entity.setUuid(data.uuid);
    entity.setContractAt(data.contractAt);

    const user = new UserEntity();
    user.setEmail(data.user.email);
    entity.setUser(user);

    const organization = new OrganizationEntity();
    organization.setUuid(data.organization.uuid);
    organization.setSocialName(data.organization.social_name);

    entity.setOrganization(organization);

    return entity;
  }
}
