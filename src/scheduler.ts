import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ScheduleModule } from "./modules/schedules/schedule.module";

async function bootstrap_scheduler() {
    const scheduler = await NestFactory.createApplicationContext(AppModule)

}

bootstrap_scheduler()