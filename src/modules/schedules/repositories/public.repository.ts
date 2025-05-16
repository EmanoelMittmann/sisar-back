import { CreatePublicScheduleDto } from '../dtos/public-schedule.dto';

export interface ISchedulePublicRepository {
  createPublicSchedule(args: CreatePublicScheduleDto): Promise<void>;
}
