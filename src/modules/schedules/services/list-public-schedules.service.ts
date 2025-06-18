import { Inject, Injectable, Logger } from '@nestjs/common';
import { ListServicesDto } from 'src/modules/services/dtos/list-services.dto';
import { BaseService } from 'src/shared/contracts';
import { ISchedulePublicRepository } from '../repositories/public.repository';
import { ScheduleSerializer } from '../serializers/schedule.serializer';
import { ScheduleListDto } from '../dtos/schedule-list.dto';

@Injectable()
export class ListPublicScheduleService
  implements BaseService<{ organization_uuid: string }, ScheduleListDto[]>
{
  private logger = new Logger(ListPublicScheduleService.name);
  constructor(
    @Inject('ISchedulePublicRepository')
    private readonly schedulePublicRepository: ISchedulePublicRepository,
  ) {}
  async execute(args: {
    organization_uuid: string;
  }): Promise<ScheduleListDto[]> {
    try {
      const data = await this.schedulePublicRepository.listPublicSchedule(
        args.organization_uuid,
      );

      if (!data) return [];

      return ScheduleSerializer.toListMany(data);
    } catch (error) {
      this.logger.error(`Error while listing public schedules: ${error}`);
      throw error;
    }
  }
}
