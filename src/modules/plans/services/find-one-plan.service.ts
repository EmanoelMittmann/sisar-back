import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { IPlanRepository } from '../repositories/plan.repository';
import { PlanEntity } from '../entities/plan.entity';
import { PlansSerializer } from '../serializer/plans.serializer';
import { ListPlansDto } from '../dto/list-plans.dto';

@Injectable()
export class FindOnePlanService
  implements BaseService<PlanEntity, ListPlansDto>
{
  constructor(
    @Inject('IPlanRepository')
    private readonly planRepository: IPlanRepository,
  ) {}

  async execute(args: PlanEntity): Promise<ListPlansDto> {
    const plan = await this.planRepository.findOne(args);

    if (!plan) {
      throw new NotFoundException('Plan not found');
    }

    return PlansSerializer.toList(plan);
  }
}
