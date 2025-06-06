import { BaseService } from 'src/shared/contracts';
import { ScheduleListDto } from '../dtos/schedule-list.dto';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { ScheduleEntity } from '../entities/schedule.entity';
import { UserEntity } from 'src/modules/users';
import { ScheduleSerializer } from '../serializers/schedule.serializer';

@Injectable()
export class ListScheduleService
  implements BaseService<{ user_id: string }, ScheduleListDto[]>
{
  private readonly logger = new Logger(
    `MAIN-${ListScheduleService.name.toUpperCase()}`,
  );
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
  ) {}

  async execute(data: { user_id: string }): Promise<ScheduleListDto[]> {
    try {
      const entity = new ScheduleEntity();
      const user = new UserEntity();
      user.setUuid(data.user_id);
      entity.setUser(user);
      const schedules = await this.scheduleRepository.findAll(entity);
      return ScheduleSerializer.toListMany(schedules);
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
