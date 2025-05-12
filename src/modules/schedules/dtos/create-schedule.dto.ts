import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsString()
  service_id: string;

  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsOptional()
  @IsBoolean()
  remember_user: boolean;

  @IsNotEmpty()
  @IsDate()
  contract_date: Date;
}
