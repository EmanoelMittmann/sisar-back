import { Injectable } from '@nestjs/common';
import { ISchedulePublicRepository } from 'src/modules/schedules/repositories/public.repository';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePublicScheduleDto } from 'src/modules/schedules/dtos/public-schedule.dto';
import {
  PublicScheduleDBReflection,
  SerializerPublicSchedule,
} from '../serializers/public-schedule.serializer';
import { PublicScheduleEntity } from 'src/modules/schedules/entities/public-schedule.entity';

@Injectable()
export class PublicSchedulePostgresRepository
  implements ISchedulePublicRepository
{
  constructor(private readonly prisma: PrismaService) {}
  async createPublicSchedule(args: CreatePublicScheduleDto): Promise<void> {
    await this.prisma.publicSchedule.create({
      data: {
        contractAt: args.contract_date,
        description: args.description,
        service: {
          connect: {
            uuid: args.service_id,
          },
        },
        organization: {
          connect: {
            uuid: args.organization_id,
          },
        },
      },
    });
  }

  async listPublicSchedule(
    organization_uuid: string,
  ): Promise<PublicScheduleEntity[]> {
    const data = (await this.prisma.publicSchedule.findMany({
      where: {
        organization: {
          uuid: organization_uuid,
        },
      },
      include: {
        service: {
          select: {
            uuid: true,
            name: true,
          },
        },
        organization: {
          select: {
            uuid: true,
            social_name: true,
          },
        },
      },
    })) as unknown as PublicScheduleDBReflection[];

    if (!data) return [];

    return SerializerPublicSchedule.toManyEntity(data);
  }

  async getDetailsPublicSchedule(
    schedule_id: string,
  ): Promise<PublicScheduleEntity | null> {
    const data = await this.prisma.publicSchedule.findUnique({
      where: {
        uuid: schedule_id,
      },
      include: {
        service: {
          select: {
            uuid: true,
            name: true,
            price: true,
            duration: true,
          },
        },
      },
    });

    if (!data) return null;

    return SerializerPublicSchedule.toDetailEntity(data);
  }
}
