import { Body, Controller, Param, Patch } from '@nestjs/common';
import { CreatePublicScheduleService } from '../services/create-public-schedule.service';
import { CreatePublicScheduleDto } from '../dtos/public-schedule.dto';

@Controller('public/schedules')
export class PublicScheduleController {
  constructor(
    private readonly createPublicScheduleService: CreatePublicScheduleService,
  ) {}

  @Patch('/:uuid')
  async toPublicSchedule(
    @Param('uuid') organization_uuid: string,
    @Body() body: Omit<CreatePublicScheduleDto, 'organization_uuid'>,
  ) {
    return this.createPublicScheduleService.execute({
      contract_date: body.contract_date,
      service_id: body.service_id,
      description: body.description,
      organization_id: organization_uuid,
    });
  }
}
