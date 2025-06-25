import { PlanEntity } from 'src/modules/plans/entities/plan.entity';
import { Recurrent } from 'src/shared/enum/recurrent.enum';

export interface IPlanDBReflection {
  id: number;
  uuid: string;
  name: string;
  price: number;
  status: boolean;
  quantityInstallment: number;
  description: string;
  dueDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
  organizationId: number;
}

export class PlansSerializer {
  static toEntity(data: IPlanDBReflection): PlanEntity {
    const plan = new PlanEntity();
    plan.setId(data.id);
    plan.setUuid(data.uuid);
    plan.setName(data.name);
    plan.setPrice(data.price);
    plan.setQuantityInstallments(data.quantityInstallment);
    plan.setStatus(data.status);
    plan.setDescription(data.description);
    if (data.dueDate) {
      plan.setDueDate(data.dueDate);
    }
    plan.setCreatedAt(data.createdAt);
    plan.setUpdatedAt(data.updatedAt);

    return plan;
  }

  static toManyEntity(data: IPlanDBReflection[]): PlanEntity[] {
    return data.map(this.toEntity);
  }
}
