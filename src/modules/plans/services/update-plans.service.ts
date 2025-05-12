import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { IPlanRepository } from '../repositories/plan.repository';
import { BaseService } from 'src/shared/contracts';
import { PlanEntity } from '../entities/plan.entity';

@Injectable()
export class UpdatePlansService implements BaseService<PlanEntity, void> {
  constructor(
    @Inject('IPlanRepository')
    private readonly planRepository: IPlanRepository,
  ) {}

  async execute(args: PlanEntity): Promise<void> {
    try {
      await this.planRepository.update(args);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
