import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { PublicScheduleEntity } from 'src/modules/schedules/entities/public-schedule.entity';
import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import { StatusSchedules } from 'src/shared/enum/status_schedules.enum';

export interface PublicScheduleDBReflection {
  id: number;
  uuid: string;
  contractAt: Date;
  description: string;
  status: string;
  organization: {
    uuid: string;
    social_name: string;
  };
  service: {
    uuid: string;
    name: string;
  };
}

export interface PublicScheduleDetailDBReflection {
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
}

export class SerializerPublicSchedule {
  static toEntity(data: PublicScheduleDBReflection): PublicScheduleEntity {
    const entity = new PublicScheduleEntity();

    entity.setId(data.id);
    entity.setUuid(data.uuid);
    entity.setContractAt(data.contractAt);
    entity.setDescription(data.description);
    entity.setStatus(data.status as StatusSchedules);

    if (data.organization) {
      const organization = new OrganizationEntity();
      organization.setUuid(data.organization.uuid);
      organization.setSocialName(data.organization.social_name);
      entity.setOrganization(organization);
    }

    if (data.service) {
      const service = new ServiceEntity();
      service.setUuid(data.service.uuid);
      service.setName(data.service.name);
      entity.setService(service);
    }
    return entity;
  }

  static toDetailEntity(
    data: PublicScheduleDetailDBReflection,
  ): PublicScheduleEntity {
    const entity = new PublicScheduleEntity();
    entity.setId(data.id);
    entity.setContractAt(data.contractAt);
    entity.setDescription(data.description);
    entity.setStatus(data.status as StatusSchedules);

    if (data.service) {
      const service = new ServiceEntity();
      service.setUuid(data.service.uuid);
      service.setName(data.service.name);
      service.setPrice(data.service.price);
      service.setDuration(data.service.duration);
      entity.setService(service);
    }

    return entity;
  }

  static toManyEntity(
    data: PublicScheduleDBReflection[],
  ): PublicScheduleEntity[] {
    return data.map((item) => this.toEntity(item));
  }
}
