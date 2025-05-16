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
import { ListServicesDto } from '../dtos/list-services.dto';
import { ServiceEntity } from '../entities/service.entity';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { ListServicesService } from '../services/list-services.service';
import { CreateServiceDto } from '../dtos/create-service.dto';
import { DeleteServiceService } from '../services/delete-service';
import { CreateServiceService } from '../services/create-service';
import { UpdateServiceService } from '../services/update-service';
import { GetByIdServiceService } from '../services/get-by-id-service';
import { UpdateServiceDto } from '../dtos/update-service.dto';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';
import { UserEntity } from 'src/modules/users';

@Controller('services')
export class ServicesController {
  constructor(
    private readonly listServicesService: ListServicesService,
    private readonly createServiceService: CreateServiceService,
    private readonly updateServiceService: UpdateServiceService,
    private readonly deleteServiceService: DeleteServiceService,
    private readonly getByIdService: GetByIdServiceService,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async listAll(
    @Param('organization_id') organization_id: string,
  ): Promise<ListServicesDto[]> {
    const service = new ServiceEntity();
    const org = new OrganizationEntity();
    org.setUuid(organization_id);
    service.setOrganization(org);

    return this.listServicesService.execute(service);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateServiceDto,
  ): Promise<void> {
    const service = new ServiceEntity();
    service.setUuid(id);
    service.setName(body.name);
    service.setPrice(body.price);
    service.setDuration(body.duration);
    service.setIsQuantitative(body.is_quantitative);
    service.setLimitForDay(body.limit_for_day);
    await this.updateServiceService.execute(service);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ServiceEntity> {
    const service = new ServiceEntity();
    service.setUuid(id);
    return this.deleteServiceService.execute(service);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string): Promise<ListServicesDto> {
    const service = new ServiceEntity();
    service.setUuid(id);
    return this.getByIdService.execute(service);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() body: CreateServiceDto,
    @UseAuthUser() user: UserEntity,
  ): Promise<ServiceEntity> {
    const service = new ServiceEntity();
    service.setName(body.name);
    service.setPrice(body.price);
    service.setDuration(body.duration);
    service.setIsQuantitative(body.is_quantitative);
    service.setLimitForDay(body.limit_for_day);
    service.setOrganization(user.getOrganization() as OrganizationEntity);
    return this.createServiceService.execute(service);
  }
}
