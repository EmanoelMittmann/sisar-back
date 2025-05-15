import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { RedisModule } from 'src/infrastructure/redis/redis.module';
import { EmailModule } from 'src/infrastructure/warn-emails/warn-email.module';
import { SchedulerService } from './scheduler.service';
import { PrismaModule } from 'src/infrastructure/postgres/prisma/prisma.module';

@Module({
  imports: [RedisModule, ScheduleModule.forRoot(), EmailModule, PrismaModule],
  providers: [SchedulerService],
})
export class SchedulerModule {}
