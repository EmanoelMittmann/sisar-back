import { ScheduleEntity } from '../entities/schedule.entity';
import { BaseCrudOperationsContract } from '../../../shared/contracts/base-crud-operations.contract';

export interface IScheduleRepository
  extends BaseCrudOperationsContract<ScheduleEntity, ScheduleEntity> {
  findOrganizationByService(
    service_uuid: string,
  ): Promise<{ organization_id: number; service_id: number } | null>;
  findByOrganizationUuid(organization_id: string): Promise<ScheduleEntity[]>;
  alterStatusByUuid(schedule_uuid: string, status: string): Promise<void>;
  findDetailByUuid(schedule_uuid: string): Promise<ScheduleEntity | null>;
}
