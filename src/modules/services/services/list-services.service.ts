import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { ListServicesDto } from '../dtos/list-services.dto';
import { ServiceSerializer } from '../serializers/service.serializer';
import { IServiceRepository } from '../repositories/services.repository';
import { ServiceEntity } from '../entities/service.entity';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';

@Injectable()
export class ListServicesService
  implements BaseService<string, ListServicesDto[]>
{
  constructor(
    @Inject('IServiceRepository')
    private readonly serviceRepository: IServiceRepository,
  ) {}

  async execute(organization_id: string): Promise<ListServicesDto[]> {
    const service = new ServiceEntity();
    const org = new OrganizationEntity();
    org.setUuid(organization_id);
    service.setOrganization(org);
    const services = await this.serviceRepository.findAll(service);
    return new ServiceSerializer().toList(services);
  }
}
