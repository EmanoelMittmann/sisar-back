import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreatePublicScheduleService } from '../services/create-public-schedule.service';
import { CreatePublicScheduleDto } from '../dtos/public-schedule.dto';
import { ListPublicScheduleService } from '../services/list-public-schedules.service';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';
import { UserEntity } from 'src/modules/users';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { GetDetailsScheduleService } from '../services/get-details-schedule.service';

@Controller('public/schedules')
export class PublicScheduleController {
  constructor(
    private readonly createPublicScheduleService: CreatePublicScheduleService,
    private readonly listPublicScheduleService: ListPublicScheduleService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('/list')
  async getPublicSchedules(@UseAuthUser() user: UserEntity) {
    const organization = user.getOrganization();
    if (!user || !organization) {
      throw new Error('User does not belong to any organization');
    }
    return this.listPublicScheduleService.execute({
      organization_uuid: organization?.getUuid(),
    });
  }

  @Post('/:uuid')
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
