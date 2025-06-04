import { BaseCrudOperationsContract } from 'src/shared/contracts';
import { OrganizationEntity } from '../entities/organization.entity';

export interface IOrganizationRepository
  extends Omit<
    BaseCrudOperationsContract<OrganizationEntity, OrganizationEntity>,
    'findAll'
  > {
  findByEmail(email: string): Promise<OrganizationEntity | null>;
  findAll(): Promise<OrganizationEntity[]>;
  findByUserId(userId: string): Promise<OrganizationEntity | null>;
}
