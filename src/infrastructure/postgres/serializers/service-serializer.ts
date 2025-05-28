import { ServiceEntity } from 'src/modules/services/entities/service.entity';

export interface ServiceDBReflection {
  name: string;
  id: number;
  uuid: string;
  price: number;
  is_active: boolean;
  duration: string;
  is_quantitative: boolean;
  limit_for_day: number | null;
  createdAt: Date;
  updatedAt: Date;
  organizationId: number;
}

export interface FindByOrganization {
  uuid: string;
  name: string;
  duration: string;
  price: string;
}

export class ServiceSerializer {
  toManyEntity(data: ServiceDBReflection[]): ServiceEntity[] {
    return data.map(this.toEntity);
  }

  toEntity(data: ServiceDBReflection): ServiceEntity {
    const entity = new ServiceEntity();
    entity.setId(data.id);
    entity.setUuid(data.uuid);
    entity.setName(data.name);
    entity.setPrice(data.price);
    entity.setIsActive(data.is_active);
    entity.setDuration(data.duration);
    entity.setIsQuantitative(data.is_quantitative);
    if (data.limit_for_day) {
      entity.setLimitForDay(data.limit_for_day);
    }
    entity.setCreatedAt(data.createdAt);
    entity.setUpdatedAt(data.updatedAt);
    return entity;
  }

  toEntityFindByOrganization(data: FindByOrganization): ServiceEntity {
    const entity = new ServiceEntity();
    entity.setUuid(data.uuid);
    entity.setName(data.name);
    entity.setDuration(data.duration);
    entity.setPrice(Number(data.price));
    return entity;
  }

  toManyEntityFindByOrganization(data: FindByOrganization[]): ServiceEntity[] {
    return data.map(this.toEntityFindByOrganization);
  }
}
