import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { IPlanRepository } from '../repositories/plan.repository';
import { BaseService } from 'src/shared/contracts';
import { PlanEntity } from '../entities/plan.entity';

@Injectable()
export class UpdatePlansService implements BaseService<PlanEntity, void> {
  private readonly logger = new Logger(UpdatePlansService.name);
  constructor(
    @Inject('IPlanRepository')
    private readonly planRepository: IPlanRepository,
  ) {}

  async execute(args: PlanEntity): Promise<void> {
    try {
      await this.planRepository.update(args);
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Error ao atualizar o plano');
    }
  }
}
