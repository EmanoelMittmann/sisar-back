import { BaseCrudOperationsContract } from 'src/shared/contracts';
import { ServiceEntity } from '../entities/service.entity';

export interface IServiceRepository
  extends BaseCrudOperationsContract<ServiceEntity, ServiceEntity> {
  findByCompanyId(company_id: string): Promise<ServiceEntity[]>;
}
