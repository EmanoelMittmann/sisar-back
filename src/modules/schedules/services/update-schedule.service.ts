import { Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { ScheduleEntity } from '../entities/schedule.entity';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { REMEMBER_USER_KEY } from 'src/shared/keys/remember-user.key';
import Redis from 'ioredis';
import { SCHEDULE_USER_KEY } from 'src/shared/keys/schedule-user.key';

@Injectable()
export class UpdateScheduleService
  implements BaseService<ScheduleEntity, void> {
  private readonly logger = new Logger(`MAIN-${UpdateScheduleService.name.toUpperCase()}`);
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
    @Inject('RedisClient')
    private readonly redis_client: Redis,
  ) { }

  async execute(args: ScheduleEntity): Promise<void> {
    try {
      await this.scheduleRepository.update(args);
      if (!args.getRememberUser()) {
        await this.redis_client.lrem(REMEMBER_USER_KEY, 1, args.getUser().getUuid());
        await this.redis_client.del(SCHEDULE_USER_KEY(args.getUser().getUuid()));
      }
      if (args.getRememberUser()) {
        await this.redis_client.lpush(REMEMBER_USER_KEY, args.getUser().getUuid());
        await this.redis_client.set(SCHEDULE_USER_KEY(args.getUser().getUuid()), args.getContractAt().toISOString());
      }
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
