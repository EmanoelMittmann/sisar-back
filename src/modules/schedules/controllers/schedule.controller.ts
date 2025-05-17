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

@Controller('schedules')
export class ScheduleController {
  constructor(
    private readonly createScheduleService: CreateScheduleService,
    private readonly findByUuidService: FindByUuidService,
    private readonly deleteScheduleService: DeleteScheduleService,
    private readonly listScheduleService: ListScheduleService,
    private readonly updateScheduleService: UpdateScheduleService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async create(@Body() body: CreateScheduleDto) {
    return this.createScheduleService.execute(body);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@UseAuthUser() user: UserEntity): Promise<ScheduleListDto[]> {
    return this.listScheduleService.execute({ user_id: user.getUuid() });
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
  async update(@Param('id') id: string, @Body() body: UpdateScheduleDto) {
    const serialize = ScheduleSerializer.toEntity(body);
    await this.updateScheduleService.execute(serialize);
  }
}
