import { BaseCrudOperationsContract } from 'src/shared/contracts';
import { PlanEntity } from '../entities/plan.entity';
import { BillingType } from 'src/shared/enum/billing-type.enum';
import { CycleEnum } from 'src/shared/enum/cycle.enum';

export interface IPlanRepository
  extends BaseCrudOperationsContract<PlanEntity, PlanEntity> {
  findByUserId(user_id: string): Promise<PlanEntity[]>;
  assocUserToPlan(
    user_id: string,
    plan_id: string,
  ): Promise<{
    recurrent: CycleEnum;
    dueDate: Date;
    price: number;
  }>;
}
