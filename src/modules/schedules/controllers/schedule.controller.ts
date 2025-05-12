import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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

@Controller('schedules')
export class ScheduleController {
  constructor(
    private readonly createScheduleService: CreateScheduleService,
    private readonly findByUuidService: FindByUuidService,
    private readonly deleteScheduleService: DeleteScheduleService,
    private readonly listScheduleService: ListScheduleService,
    private readonly updateScheduleService: UpdateScheduleService,
  ) {}

  @Post('/create')
  async create(@Body() body: CreateScheduleDto) {
    return this.createScheduleService.execute(body);
  }

  @Get('/')
  async findAll(@UseAuthUser() user: UserEntity) {
    return this.listScheduleService.execute({ user_id: user.getUuid() });
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const schedule = await this.findByUuidService.execute(id);
    return ScheduleSerializer.toListOne(schedule);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const exists = await this.findByUuidService.execute(id);
    this.deleteScheduleService.execute(exists);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateScheduleDto) {
    const serialize = ScheduleSerializer.toEntity(body);
    return this.updateScheduleService.execute(serialize);
  }
}
