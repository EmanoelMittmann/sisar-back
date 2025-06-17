import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateScheduleDto } from '../dtos/create-schedule.dto';
import { CreateScheduleService } from '../services/create-schedule.service';
import { FindByUuidService } from '../services/find-by-uuid.service';
import { DeleteScheduleService } from '../services/delete-schedule.service';
import { ScheduleSerializer } from '../serializers/schedule.serializer';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';
import { UserEntity } from 'src/modules/users';
import { ListScheduleService } from '../services/list-schedule.service';
import { UpdateScheduleService } from '../services/update-schedule.service';
import { UpdateScheduleDto } from '../dtos/update-scedule.dto';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { ScheduleListDto } from '../dtos/schedule-list.dto';
import { FindByCompanyService } from '../services/find-by-company.service';
import { AlterStatusScheduleService } from '../services/alter-status-schedule.service';
import { StatusSchedules } from 'src/shared/enum/status_schedules.enum';

@Controller('schedules')
export class ScheduleController {
  constructor(
    private readonly createScheduleService: CreateScheduleService,
    private readonly findByUuidService: FindByUuidService,
    private readonly deleteScheduleService: DeleteScheduleService,
    private readonly listScheduleService: ListScheduleService,
    private readonly updateScheduleService: UpdateScheduleService,
    private readonly findByCompanyService: FindByCompanyService,
    private readonly alterStatusScheduleService: AlterStatusScheduleService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async create(
    @Body() body: CreateScheduleDto,
    @UseAuthUser() user: UserEntity,
  ) {
    return this.createScheduleService.execute({
      ...body,
      user_id: user.getId(),
      user_uuid: user.getUuid(),
    });
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@UseAuthUser() user: UserEntity): Promise<ScheduleListDto[]> {
    return this.listScheduleService.execute({ user_id: user.getUuid() });
  }

  @UseGuards(AuthGuard)
  @Get('/by-company')
  async findByCompany(
    @UseAuthUser() user: UserEntity,
  ): Promise<ScheduleListDto[]> {
    return this.findByCompanyService.execute({
      company_id: user.getOrganization()?.getUuid() as string,
    });
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<ScheduleListDto> {
    const schedule = await this.findByUuidService.execute(id);
    return ScheduleSerializer.toListOne(schedule);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const exists = await this.findByUuidService.execute(id);
    await this.deleteScheduleService.execute(exists);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateScheduleDto,
    @UseAuthUser() user: UserEntity,
  ) {
    const serialize = ScheduleSerializer.toEntity({
      id,
      ...body,
      user_id: user.getUuid(),
    });
    await this.updateScheduleService.execute(serialize);
  }

  @UseGuards(AuthGuard)
  @Put('/alter-status/:id')
  async alterStatus(
    @Param('id') id: string,
    @Body() body: { status: string },
  ): Promise<void> {
    await this.alterStatusScheduleService.execute({
      schedule_uuid: id,
      status: body.status as StatusSchedules,
    });
    return;
  }
}
