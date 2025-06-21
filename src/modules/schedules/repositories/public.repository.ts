import { CreatePublicScheduleDto } from '../dtos/public-schedule.dto';
import { PublicScheduleEntity } from '../entities/public-schedule.entity';

export interface ISchedulePublicRepository {
  createPublicSchedule(args: CreatePublicScheduleDto): Promise<void>;
  listPublicSchedule(
    organization_uuid: string,
  ): Promise<PublicScheduleEntity[]>;
  getDetailsPublicSchedule(
    schedule_id: string,
  ): Promise<PublicScheduleEntity | null>;
  alterStatus(schedule_uuid: string, status: string): Promise<void>;
}
