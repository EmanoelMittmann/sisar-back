import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { REDIS_OPTIONS } from "src/infrastructure/redis/options";
import { EmailModule } from "src/infrastructure/warn-emails/warn-email.module";
import { SchedulesModule } from "src/modules/schedules/schedule.module";


@Module({
    imports: [
        SchedulesModule,
        ScheduleModule.forRoot(),
        EmailModule,
        CacheModule.register(REDIS_OPTIONS)
    ]
})
export class SchedulerModule { }