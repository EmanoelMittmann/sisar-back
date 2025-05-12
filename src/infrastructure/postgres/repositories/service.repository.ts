import { Injectable } from '@nestjs/common';
import { IServiceRepository } from 'src/modules/services/repositories/services.repository';
import { PrismaService } from '../prisma/prisma.service';
import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import {
  ServiceSerializer,
  ServiceSerializerContract,
} from '../serializers/service-serializer';

@Injectable()
export class ServicePostgresRepository implements IServiceRepository {
  private readonly serializer = new ServiceSerializer();
  constructor(private readonly prisma: PrismaService) {}

  async create(args: ServiceEntity): Promise<ServiceEntity> {
    const data = (await this.prisma.service.create({
      data: {
        name: args.getName(),
        price: args.getPrice(),
        duration: args.getDuration(),
        is_active: args.getIsActive(),
        is_quantitative: args.getIsQuantitative(),
        limit_for_day: args.getLimitForDay(),
        organizationId: args.getOrganization().getId(),
      },
    })) as unknown as ServiceSerializerContract;

    return this.serializer.toEntity(data);
  }

  async findAll(args: ServiceEntity): Promise<ServiceEntity[]> {
    const services = (await this.prisma.service.findMany({
      where: {
        organizationId: args.getOrganization().getId(),
      },
    })) as unknown as ServiceSerializerContract[];

    return this.serializer.toManyEntity(services);
  }

  async findOne(args: ServiceEntity): Promise<ServiceEntity> {
    const service = (await this.prisma.service.findUnique({
      where: {
        id: args.getId(),
      },
    })) as unknown as ServiceSerializerContract;

    return this.serializer.toEntity(service);
  }

  async update(args: ServiceEntity): Promise<ServiceEntity> {
    const data = (await this.prisma.service.update({
      where: {
        id: args.getId(),
      },
      data: {
        name: args.getName(),
        price: args.getPrice(),
        duration: args.getDuration(),
        is_active: args.getIsActive(),
        is_quantitative: args.getIsQuantitative(),
      },
    })) as unknown as ServiceSerializerContract;

    return this.serializer.toEntity(data);
  }
  async delete(args: ServiceEntity): Promise<ServiceEntity> {
    await this.prisma.service.delete({
      where: {
        id: args.getId(),
      },
    });

    return args;
  }
}
