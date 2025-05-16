import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { CreatePublicScheduleDto } from '../dtos/public-schedule.dto';
import { ISchedulePublicRepository } from '../repositories/public.repository';

@Injectable()
export class CreatePublicScheduleService
  implements BaseService<CreatePublicScheduleDto, void>
{
  private logger = new Logger(
    `MAIN-${CreatePublicScheduleService.name.toUpperCase()}`,
  );
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: ISchedulePublicRepository,
  ) {}

  async execute(args: CreatePublicScheduleDto): Promise<void> {
    try {
      await this.scheduleRepository.createPublicSchedule(args);
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
