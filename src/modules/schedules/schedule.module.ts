import { Module } from "@nestjs/common";
import { ScheduleController } from "./controllers/schedule.controller";
import { CreateScheduleService } from "./services/create-schedule.service";
import { ScheduleInMemoryRepository } from "src/infrastructure/in_memory/schedules/repository";
import { FindByUuidService } from "./services/find-by-uuid.service";
import { DeleteScheduleService } from "./services/delete-schedule.service";
import { ListScheduleService } from "./services/list-schedule.service";
import { UpdateScheduleService } from "./services/update-schedule.service";


@Module({
    controllers: [ScheduleController],
    providers: [
        {
            provide: 'IScheduleRepository',
            useClass: ScheduleInMemoryRepository
        },
        CreateScheduleService,
        FindByUuidService,
        DeleteScheduleService,
        ListScheduleService,
        UpdateScheduleService
    ]
})
export class ScheduleModule { }