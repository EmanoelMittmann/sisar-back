import { Module } from '@nestjs/common';
import { ScheduleController } from './controllers/schedule.controller';
import { CreateScheduleService } from './services/create-schedule.service';
import { FindByUuidService } from './services/find-by-uuid.service';
import { DeleteScheduleService } from './services/delete-schedule.service';
import { ListScheduleService } from './services/list-schedule.service';
import { UpdateScheduleService } from './services/update-schedule.service';
import { PublicScheduleController } from './controllers/public-schedule.controller';
import { SchedulePostgresRepository } from 'src/infrastructure/postgres/repositories/schedule.repository';
import { RedisModule } from 'src/infrastructure/redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [ScheduleController, PublicScheduleController],
  providers: [
    {
      provide: 'IScheduleRepository',
      useClass: SchedulePostgresRepository,
    },
    CreateScheduleService,
    FindByUuidService,
    DeleteScheduleService,
    ListScheduleService,
    UpdateScheduleService,
  ],
  exports: ['IScheduleRepository', FindByUuidService],
})
export class SchedulesModule {}
