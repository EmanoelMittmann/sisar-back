import { Module } from "@nestjs/common";
import { PlansPostgresRepository } from "src/infrastructure/postgres/repositories/plans.repository";
import { PlansController } from "./controller/plans.controller";
import { FindOnePlanService } from "./services/find-one-plan.service";
import { ListAllService } from "./services/list-all-service.service";
import { CreatePlansService } from "./services/create-plans.service";
import { UpdatePlansService } from "./services/update-plans.service";
import { DeletePlansService } from "./services/delete-plans.service";


@Module({
    controllers: [PlansController],
    providers: [
        {
            provide: 'IPlanRepository',
            useClass: PlansPostgresRepository
        },
        ListAllService,
        CreatePlansService,
        UpdatePlansService,
        DeletePlansService,
        FindOnePlanService
    ]
})
export class PlansModule { }