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
import { CreatePublicScheduleService } from './services/create-public-schedule.service';
import { FindByCompanyService } from './services/find-by-company.service';
import { AlterStatusScheduleService } from './services/alter-status-schedule.service';
import { PublicSchedulePostgresRepository } from 'src/infrastructure/postgres/repositories/public.repository';
import { ListPublicScheduleService } from './services/list-public-schedules.service';
import { GetDetailsScheduleService } from './services/get-details-schedule.service';

@Module({
  imports: [RedisModule],
  controllers: [ScheduleController, PublicScheduleController],
  providers: [
    {
      provide: 'IScheduleRepository',
      useClass: SchedulePostgresRepository,
    },
    {
      provide: 'ISchedulePublicRepository',
      useClass: PublicSchedulePostgresRepository,
    },
    CreateScheduleService,
    FindByUuidService,
    DeleteScheduleService,
    ListScheduleService,
    UpdateScheduleService,
    ListPublicScheduleService,
    CreatePublicScheduleService,
    FindByCompanyService,
    GetDetailsScheduleService,
    AlterStatusScheduleService,
  ],
  exports: ['IScheduleRepository', FindByUuidService],
})
export class SchedulesModule {}
