import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { ISchedulePublicRepository } from '../repositories/public.repository';
import { ScheduleEntity } from '../entities/schedule.entity';
import { DetailsScheduleDto } from '../dtos/details-schedule.dto';
import { ScheduleSerializer } from '../serializers/schedule.serializer';

@Injectable()
export class GetDetailsScheduleService
  implements BaseService<{ schedule_id: string }, any>
{
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
    @Inject('ISchedulePublicRepository')
    private readonly schedulePublicRepository: ISchedulePublicRepository,
  ) {}

  async execute(args: { schedule_id: string }): Promise<DetailsScheduleDto> {
    const { schedule_id } = args;

    if (!schedule_id) {
      throw new NotFoundException(`Schedule ID is required`);
    }

    const repository =
      await this.scheduleRepository.findDetailByUuid(schedule_id);

    if (!repository) {
      const find =
        await this.schedulePublicRepository.getDetailsPublicSchedule(
          schedule_id,
        );

      if (!find) {
        throw new NotFoundException(`Schedule not found`);
      }

      return ScheduleSerializer.toDetails(find);
    }

    return ScheduleSerializer.toDetails(repository);
  }

  private toEntity(schedule_id: string) {
    const entity = new ScheduleEntity();

    entity.setUuid(schedule_id);

    return entity;
  }
}
