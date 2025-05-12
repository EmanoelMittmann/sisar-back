import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePlansService } from '../services/create-plans.service';
import { DeletePlansService } from '../services/delete-plans.service';
import { UpdatePlansService } from '../services/update-plans.service';
import { FindOnePlanService } from '../services/find-one-plan.service';
import { ListAllService } from '../services/list-all-service.service';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { PlanEntity } from '../entities/plan.entity';
import { ListPlansDto } from '../dto/list-plans.dto';
import { CreatePlansDto } from '../dto/create-plans.dto';
import { UpdatePlansDto } from '../dto/update-plans.dto';

@Controller('plans')
export class PlansController {
  constructor(
    private readonly listPlansService: ListAllService,
    private readonly createPlansService: CreatePlansService,
    private readonly updatePlansService: UpdatePlansService,
    private readonly deletePlansService: DeletePlansService,
    private readonly findOnePlanService: FindOnePlanService,
  ) {}

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

  @Post('/create/:organization_id')
  async create(
    @Param('organization_id') organization_id: string,
    @Body() createPlansDto: CreatePlansDto,
  ): Promise<void> {
    const organization = new OrganizationEntity();
    organization.setUuid(organization_id);

    const plan = new PlanEntity();
    plan.setOrganization(organization);

    return this.createPlansService.execute(plan);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlansDto: UpdatePlansDto,
  ): Promise<void> {
    const plan = new PlanEntity();
    plan.setUuid(id);

    return this.updatePlansService.execute(plan);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const plan = new PlanEntity();
    plan.setUuid(id);

    return this.deletePlansService.execute(plan);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ListPlansDto> {
    const plan = new PlanEntity();
    plan.setUuid(id);
    return this.findOnePlanService.execute(plan);
  }
}
