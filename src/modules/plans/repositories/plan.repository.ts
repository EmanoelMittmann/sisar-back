import { BaseCrudOperationsContract } from 'src/shared/contracts';
import { PlanEntity } from '../entities/plan.entity';

export interface IPlanRepository
  extends BaseCrudOperationsContract<PlanEntity, PlanEntity> {}
