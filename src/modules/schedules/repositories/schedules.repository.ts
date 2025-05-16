import { ScheduleEntity } from '../entities/schedule.entity';
import { BaseCrudOperationsContract } from '../../../shared/contracts/base-crud-operations.contract';

export type IScheduleRepository = BaseCrudOperationsContract<
  ScheduleEntity,
  ScheduleEntity
>;
