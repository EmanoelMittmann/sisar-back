import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreatePlansService } from '../services/create-plans.service';
import { DeletePlansService } from '../services/delete-plans.service';
import { UpdatePlansService } from '../services/update-plans.service';
import { FindOnePlanService } from '../services/find-one-plan.service';
import { ListAllPlansService } from '../services/list-all-plans.service';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { PlanEntity } from '../entities/plan.entity';
import { ListPlansDto } from '../dto/list-plans.dto';
import { CreatePlansDto } from '../dto/create-plans.dto';
import { UpdatePlansDto } from '../dto/update-plans.dto';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { ListPlansByUserService } from '../services/list-by-user.service';
import { UserEntity } from 'src/modules/users';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';

@Controller('plans')
export class PlansController {
  constructor(
    private readonly listPlansService: ListAllPlansService,
    private readonly createPlansService: CreatePlansService,
    private readonly updatePlansService: UpdatePlansService,
    private readonly deletePlansService: DeletePlansService,
    private readonly findOnePlanService: FindOnePlanService,
    private readonly listByUserService: ListPlansByUserService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('/:organization_id')
  async findAll(
    @Param('organization_id') organization_id: string,
  ): Promise<ListPlansDto[]> {
    const organization = new OrganizationEntity();
    organization.setUuid(organization_id);

    const plans = new PlanEntity();
    plans.setOrganization(organization);

    return this.listPlansService.execute(plans);
  }

  @Patch('/user')
  async listByUser(@UseAuthUser() user: UserEntity): Promise<ListPlansDto[]> {
    return this.listByUserService.execute(user.getUuid());
  }

  @UseGuards(AuthGuard)
  @Post('/create/:organization_id')
  async create(
    @Param('organization_id') organization_id: string,
    @Body() createPlansDto: CreatePlansDto,
  ): Promise<void> {
    const organization = new OrganizationEntity();
    organization.setUuid(organization_id);

    const plan = new PlanEntity();
    plan.setOrganization(organization);
    plan.setName(createPlansDto.name);
    plan.setDescription(createPlansDto.description);
    plan.setPrice(createPlansDto.price);
    plan.setDueDate(createPlansDto.dueDate);
    plan.setRecurrent(createPlansDto.recurrent);

    return await this.createPlansService.execute(plan);
  }

  @UseGuards(AuthGuard)
  @Put('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePlansDto: UpdatePlansDto,
  ): Promise<void> {
    const plan = new PlanEntity();
    plan.setUuid(id);

    plan.setName(updatePlansDto.name);
    plan.setName(updatePlansDto.name);
    plan.setDescription(updatePlansDto.description);
    plan.setPrice(updatePlansDto.price);
    plan.setDueDate(updatePlansDto.dueDate);
    plan.setRecurrent(updatePlansDto.recurrent);

    return this.updatePlansService.execute(plan);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const plan = new PlanEntity();
    plan.setUuid(id);

    return this.deletePlansService.execute(plan);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async findOne(@Param('id') id: string): Promise<ListPlansDto> {
    const plan = new PlanEntity();
    plan.setUuid(id);
    return this.findOnePlanService.execute(plan);
  }
}
