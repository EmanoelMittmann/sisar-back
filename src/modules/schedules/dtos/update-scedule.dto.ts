import { IsString } from "class-validator";
import { IsNotEmpty } from "class-validator";
import { IsUUID } from "class-validator";
import { CreateScheduleDto } from "./create-schedule.dto";


export class UpdateScheduleDto extends CreateScheduleDto {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string
}