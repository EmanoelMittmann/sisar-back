import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { ListPlansDto } from '../dto/list-plans.dto';
import { IPlanRepository } from '../repositories/plan.repository';
import { PlansSerializer } from '../serializer/plans.serializer';

@Injectable()
export class ListPlansByUserService
  implements BaseService<string, ListPlansDto[]>
{
  constructor(
    @Inject('IPlanRepository')
    private readonly planRepository: IPlanRepository,
  ) {}

  async execute(user_id: string): Promise<ListPlansDto[]> {
    const plans = await this.planRepository.findByUserId(user_id);
    return PlansSerializer.toManyList(plans);
  }
}
