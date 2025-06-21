import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { StatusSchedules } from 'src/shared/enum/status_schedules.enum';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { ISchedulePublicRepository } from '../repositories/public.repository';

@Injectable()
export class AlterStatusScheduleService
  implements
    BaseService<{ schedule_uuid: string; status: StatusSchedules }, void>
{
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
    @Inject('ISchedulePublicRepository')
    private readonly schedulePublicRepository: ISchedulePublicRepository,
  ) {}

  async execute(args: {
    schedule_uuid: string;
    status: StatusSchedules;
  }): Promise<void> {
    if (!args.schedule_uuid) {
      throw new BadRequestException(
        'Schedule UUID is required to alter the status.',
      );
    }

    const exist = await this.scheduleRepository.findDetailByUuid(
      args.schedule_uuid,
    );

    if (!exist) {
      const existpublicSchedule =
        await this.schedulePublicRepository.getDetailsPublicSchedule(
          args.schedule_uuid,
        );

      if (!existpublicSchedule) {
        throw new NotFoundException('Agendamento não encontrado');
      }

      return this.schedulePublicRepository.alterStatus(
        args.schedule_uuid,
        args.status,
      );
    }

    await this.scheduleRepository.alterStatusByUuid(
      args.schedule_uuid,
      args.status,
    );
  }
}
