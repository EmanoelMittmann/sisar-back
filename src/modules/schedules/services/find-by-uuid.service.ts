import { Inject, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { BaseService } from 'src/shared/contracts';
import { ScheduleEntity } from '../entities/schedule.entity';
import { IScheduleRepository } from '../repositories/schedules.repository';

@Injectable()
export class FindByUuidService implements BaseService<string, ScheduleEntity> {
  private readonly logger = new Logger(`MAIN-${FindByUuidService.name.toUpperCase()}`);
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
  ) { }

  async execute(uuid: string): Promise<ScheduleEntity> {
    try {
      const entity = new ScheduleEntity();
      entity.setUuid(uuid);
      const schedule = await this.scheduleRepository.findOne(entity);
      if (!schedule) {
        throw new NotFoundException({
          message: 'Schedule not found',
        });
      }
      return schedule;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
