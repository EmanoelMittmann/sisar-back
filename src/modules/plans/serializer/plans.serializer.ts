import { ListPlansDto } from "../dto/list-plans.dto";
import { PlanEntity } from "../entities/plan.entity";



export class PlansSerializer {
    static toManyList(plan: PlanEntity[]): ListPlansDto[] {
        return plan.map(this.toList);
    }

    static toList(plan: PlanEntity): ListPlansDto {
        return {
            uuid: plan.getUuid(),
            name: plan.getName(),
            price: plan.getPrice(),
            recurrent: plan.getRecurrent(),
            description: plan.getDescription(),
            dueDate: plan.getDueDate()
        }
    }
}