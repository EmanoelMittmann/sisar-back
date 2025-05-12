import { BaseService } from 'src/shared/contracts';
import { IPlanRepository } from '../repositories/plan.repository';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PlanEntity } from '../entities/plan.entity';

@Injectable()
export class CreatePlansService implements BaseService<PlanEntity, void> {
  constructor(
    @Inject('IPlanRepository')
    private readonly planRepository: IPlanRepository,
  ) {}

  async execute(args: PlanEntity): Promise<void> {
    try {
      await this.planRepository.create(args);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
