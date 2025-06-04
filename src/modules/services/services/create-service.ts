import { BaseService } from 'src/shared/contracts';
import { ServiceEntity } from '../entities/service.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IServiceRepository } from '../repositories/services.repository';

@Injectable()
export class CreateServiceService
  implements BaseService<ServiceEntity, ServiceEntity>
{
  constructor(
    @Inject('IServiceRepository')
    private readonly serviceRepository: IServiceRepository,
  ) {}

  async execute(args: ServiceEntity): Promise<ServiceEntity> {
    console.log(args);
    return this.serviceRepository.create(args);
  }
}
