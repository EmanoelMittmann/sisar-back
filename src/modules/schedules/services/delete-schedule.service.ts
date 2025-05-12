import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { ScheduleEntity } from '../entities/schedule.entity';

@Injectable()
export class DeleteScheduleService
  implements BaseService<ScheduleEntity, void>
{
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
  ) {}

  async execute(entity: ScheduleEntity): Promise<void> {
    await this.scheduleRepository.delete(entity);
  }
}
