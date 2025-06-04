import { ListServicesDto } from '../dtos/list-services.dto';
import { ServiceEntity } from '../entities/service.entity';

export class ServiceSerializer {
  toList(services: ServiceEntity[]): ListServicesDto[] {
    return services.map(this.toListDto);
  }

  toListDto(services: ServiceEntity): ListServicesDto {
    return {
      id: services.getUuid(),
      name: services.getName(),
      duration: services.getDuration(),
      price: services.getPrice(),
      is_quantitative: services.getIsQuantitative(),
      limit_for_day: services.getLimitForDay(),
      created_at: services.getCreatedAt(),
    };
  }
}
