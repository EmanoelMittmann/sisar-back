import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "src/shared/contracts/base-service.contract";
import { PlanEntity } from "../entities/plan.entity";
import { IPlanRepository } from "../repositories/plan.repository";
import { PlansSerializer } from "../serializer/plans.serializer";
import { ListPlansDto } from "../dto/list-plans.dto";

@Injectable()
export class ListAllService implements BaseService<PlanEntity, ListPlansDto[]> {
    constructor(
        @Inject('IPlanRepository')
        private readonly planRepository: IPlanRepository
    ) { }

    async execute(args: PlanEntity): Promise<ListPlansDto[]> {
        const plans = await this.planRepository.findAll(args)

        return PlansSerializer.toManyList(plans)
    }
}