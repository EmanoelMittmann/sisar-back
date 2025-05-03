import { Injectable } from "@nestjs/common";
import { ScheduleEntity } from "src/modules/schedules/entities/schedule.entity";
import { IScheduleRepository } from "src/modules/schedules/repositories/schedules.repository";
import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class SchedulePostgresRepository implements IScheduleRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    create(args: ScheduleEntity): Promise<ScheduleEntity> {
        throw new Error("Method not implemented.");
    }

    delete(args: ScheduleEntity): Promise<ScheduleEntity> {
        throw new Error("Method not implemented.");
    }

    findAll(args: ScheduleEntity): Promise<ScheduleEntity[]> {
        throw new Error("Method not implemented.");
    }


    findOne(args: ScheduleEntity): Promise<ScheduleEntity> {
        throw new Error("Method not implemented.");
    }

    update(args: ScheduleEntity): Promise<ScheduleEntity> {
        throw new Error("Method not implemented.");
    }
}
