import { Module } from '@nestjs/common';
import { PlansPostgresRepository } from 'src/infrastructure/postgres/repositories/plans.repository';
import { PlansController } from './controller/plans.controller';
import { FindOnePlanService } from './services/find-one-plan.service';
import { ListAllPlansService } from './services/list-all-plans.service';
import { CreatePlansService } from './services/create-plans.service';
import { UpdatePlansService } from './services/update-plans.service';
import { DeletePlansService } from './services/delete-plans.service';
import { ListPlansByUserService } from './services/list-by-user.service';

@Module({
  controllers: [PlansController],
  providers: [
    {
      provide: 'IPlanRepository',
      useClass: PlansPostgresRepository,
    },
    ListAllPlansService,
    CreatePlansService,
    UpdatePlansService,
    DeletePlansService,
    FindOnePlanService,
    ListPlansByUserService,
  ],
})
export class PlansModule {}
