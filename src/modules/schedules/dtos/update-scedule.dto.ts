import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { IsUUID } from 'class-validator';
import { CreateScheduleDto } from './create-schedule.dto';

export class UpdateScheduleDto extends CreateScheduleDto {}

export class UpdateScheduleServiceDto extends UpdateScheduleDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  user_id: string;
}
