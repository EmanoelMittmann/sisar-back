import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { RedisModule } from 'src/infrastructure/redis/redis.module';
import { EmailModule } from 'src/infrastructure/warn-emails/warn-email.module';
import { SchedulerService } from './scheduler.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule,
    ScheduleModule.forRoot(),
    EmailModule,
  ],
  providers: [SchedulerService],
})
export class SchedulerModule {}
