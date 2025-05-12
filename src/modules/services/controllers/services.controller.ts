import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ListServicesDto } from '../dtos/list-services.dto';
import { UseAuthUser } from 'src/shared/decorator/use-auth-user.decorator';
import { UserEntity } from 'src/modules/users';
import { ServiceEntity } from '../entities/service.entity';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { ListServicesService } from '../services/list-services.service';
import { CreateServiceDto } from '../dtos/create-service.dto';
import { DeleteServiceService } from '../services/delete-service';
import { CreateServiceService } from '../services/create-service';
import { UpdateServiceService } from '../services/update-service';
import { GetByIdServiceService } from '../services/get-by-id-service';
import { UpdateServiceDto } from '../dtos/update-service.dto';

@Controller('services')
export class ServicesController {
  constructor(
    private readonly listServicesService: ListServicesService,
    private readonly createServiceService: CreateServiceService,
    private readonly updateServiceService: UpdateServiceService,
    private readonly deleteServiceService: DeleteServiceService,
    private readonly getByIdService: GetByIdServiceService,
  ) {}

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

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ServiceEntity> {
    const service = new ServiceEntity();
    service.setUuid(id);
    return this.deleteServiceService.execute(service);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ListServicesDto> {
    const service = new ServiceEntity();
    service.setUuid(id);
    return this.getByIdService.execute(service);
  }

  @Post()
  async create(@Body() body: CreateServiceDto): Promise<ServiceEntity> {
    const service = new ServiceEntity();
    service.setName(body.name);
    service.setPrice(body.price);
    service.setDuration(body.duration);
    service.setIsQuantitative(body.is_quantitative);
    service.setLimitForDay(body.limit_for_day);
    return this.createServiceService.execute(service);
  }
}
