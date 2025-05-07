import { ScheduleEntity } from "src/modules/schedules/entities/schedule.entity";
import { IScheduleRepository } from "src/modules/schedules/repositories/schedules.repository";



export class ScheduleInMemoryRepository implements IScheduleRepository {
    public schedules: ScheduleEntity[] = []

    create(args: ScheduleEntity): Promise<ScheduleEntity> {
        this.schedules.push(args)
        return Promise.resolve(args)
    }
    findAll(): Promise<ScheduleEntity[]> {
        return Promise.resolve(this.schedules)
    }
    findOne(args: ScheduleEntity): Promise<ScheduleEntity | null> {
        const schedule = this.schedules.find(schedule => schedule.getId() === args.getId())
        if (!schedule) {
            return Promise.resolve(null)
        }
        return Promise.resolve(schedule)
    }
    delete(args: ScheduleEntity): Promise<ScheduleEntity> {
        this.schedules = this.schedules.filter(schedule => schedule.getId() !== args.getId())
        return Promise.resolve(args)
    }
    update(args: ScheduleEntity): Promise<ScheduleEntity> {
        const index = this.schedules.findIndex(schedule => schedule.getId() === args.getId())
        this.schedules[index] = args
        return Promise.resolve(args)
    }
}