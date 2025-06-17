import { BaseService } from 'src/shared/contracts';
import { ScheduleListDto } from '../dtos/schedule-list.dto';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { Inject, Injectable } from '@nestjs/common';
import { ScheduleSerializer } from '../serializers/schedule.serializer';

@Injectable()
export class FindByCompanyService
  implements BaseService<{ company_id: string }, ScheduleListDto[]>
{
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
  ) {}

  async execute({
    company_id,
  }: {
    company_id: string;
  }): Promise<ScheduleListDto[]> {
    const data =
      await this.scheduleRepository.findByOrganizationUuid(company_id);

    return ScheduleSerializer.toListMany(data);
  }
}
