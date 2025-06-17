import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsString()
  service_id: string;

  @IsOptional()
  @IsBoolean()
  remember_user: boolean;

  @IsNotEmpty()
  @IsDate()
  contract_date: Date;
}

export class CreateScheduleServiceDto extends CreateScheduleDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  user_uuid: string;
}
