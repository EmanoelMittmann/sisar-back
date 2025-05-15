
import { Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { ScheduleEntity } from '../entities/schedule.entity';
import Redis from 'ioredis';
import { REMEMBER_USER_KEY } from 'src/shared/keys/remember-user.key';
import { SCHEDULE_USER_KEY } from 'src/shared/keys/schedule-user.key';

@Injectable()
export class DeleteScheduleService
  implements BaseService<ScheduleEntity, void> {
  private readonly logger = new Logger(`MAIN-${DeleteScheduleService.name.toUpperCase()}`);
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
    @Inject('RedisClient')
    private readonly redis_client: Redis,
  ) { }

  async execute(entity: ScheduleEntity): Promise<void> {
    try {
      await this.scheduleRepository.delete(entity);
      await this.redis_client.lrem(REMEMBER_USER_KEY, 1, entity.getUser().getUuid());
      await this.redis_client.del(SCHEDULE_USER_KEY(entity.getUser().getUuid()));
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
