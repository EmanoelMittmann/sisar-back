import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "src/shared/contracts";
import { ScheduleEntity } from "../entities/schedule.entity";
import { IScheduleRepository } from "../repositories/schedules.repository";

@Injectable()
export class UpdateScheduleService implements BaseService<ScheduleEntity, void> {
    constructor(
        @Inject("IScheduleRepository")
        private readonly scheduleRepository: IScheduleRepository
    ) { }

    async execute(args: ScheduleEntity): Promise<void> {
        await this.scheduleRepository.update(args)        
    }
}