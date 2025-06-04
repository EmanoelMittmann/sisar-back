import { BaseService } from 'src/shared/contracts';
import { IPlanRepository } from '../repositories/plan.repository';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PlanEntity } from '../entities/plan.entity';

@Injectable()
export class CreatePlansService implements BaseService<PlanEntity, void> {
  private logger = new Logger(CreatePlansService.name);
  constructor(
    @Inject('IPlanRepository')
    private readonly planRepository: IPlanRepository,
  ) {}

  async execute(args: PlanEntity): Promise<void> {
    try {
      await this.planRepository.create(args);
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
