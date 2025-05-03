
import { ScheduleEntity } from "../entities/schedule.entity";
import { BaseCrudOperationsContract } from '../../../shared/contracts/base-crud-operations.contract'

export interface IScheduleRepository extends BaseCrudOperationsContract<ScheduleEntity, ScheduleEntity> {
    
}