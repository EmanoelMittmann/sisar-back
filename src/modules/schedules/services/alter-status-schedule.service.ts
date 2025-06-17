import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { StatusSchedules } from 'src/shared/enum/status_schedules.enum';
import { IScheduleRepository } from '../repositories/schedules.repository';

@Injectable()
export class AlterStatusScheduleService
  implements
    BaseService<{ schedule_uuid: string; status: StatusSchedules }, void>
{
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
  ) {}

  async execute(args: {
    schedule_uuid: string;
    status: StatusSchedules;
  }): Promise<void> {
    await this.scheduleRepository.alterStatusByUuid(
      args.schedule_uuid,
      args.status,
    );
  }
}
