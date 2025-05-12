import { Module } from '@nestjs/common';
import { ServicesController } from './controllers/services.controller';
import { ListServicesService } from './services/list-services.service';
import { ServicePostgresRepository } from 'src/infrastructure/postgres/repositories/service.repository';
import { UpdateServiceService } from './services/update-service';
import { DeleteServiceService } from './services/delete-service';
import { CreateServiceService } from './services/create-service';
import { GetByIdServiceService } from './services/get-by-id-service';

@Module({
  controllers: [ServicesController],
  providers: [
    {
      provide: 'IServiceRepository',
      useClass: ServicePostgresRepository,
    },
    ListServicesService,
    UpdateServiceService,
    CreateServiceService,
    DeleteServiceService,
    GetByIdServiceService,
  ],
})
export class ServiceModule {}
