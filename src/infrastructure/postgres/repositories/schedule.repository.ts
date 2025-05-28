import { Injectable } from '@nestjs/common';
import { ScheduleEntity } from 'src/modules/schedules/entities/schedule.entity';
import { IScheduleRepository } from 'src/modules/schedules/repositories/schedules.repository';
import { PrismaService } from '../prisma/prisma.service';
import {
  ISchedulePendingDBReflection,
  SchedulerSerializer,
} from '../serializers/scheduler-serializer';
import { IScheduleDBReflection } from '../serializers/scheduler-serializer';
import { StatusSchedules } from 'src/shared/enum/status_schedules.enum';

@Injectable()
export class SchedulePostgresRepository implements IScheduleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: ScheduleEntity): Promise<ScheduleEntity> {
    const data = (await this.prisma.schedule.create({
      data: {
        service: {
          connect: {
            id: args.getService().getId(),
          },
        },
        organization: {
          connect: {
            id: args.getOrganization().getId(),
          },
        },
        user: {
          connect: {
            id: args.getUser().getId(),
          },
        },
        contractAt: args.getContractAt(),
        status: args.getStatus(),
        rememberUser: args.getRememberUser(),
      },
    })) as unknown as IScheduleDBReflection;

    return SchedulerSerializer.toEntity(data);
  }

  async delete(args: ScheduleEntity): Promise<ScheduleEntity> {
    const data = (await this.prisma.schedule.delete({
      where: {
        id: args.getId(),
      },
    })) as unknown as IScheduleDBReflection;

    return SchedulerSerializer.toEntity(data);
  }

  async findAll(args: ScheduleEntity): Promise<ScheduleEntity[]> {
    const data = (await this.prisma.schedule.findMany({
      where: {
        organizationId: args.getUser().getId(),
      },
    })) as unknown as IScheduleDBReflection[];

    return SchedulerSerializer.toManyEntity(data);
  }

  async findOne(args: ScheduleEntity): Promise<ScheduleEntity> {
    const data = (await this.prisma.schedule.findUnique({
      where: {
        id: args.getId(),
      },
    })) as unknown as IScheduleDBReflection;

    return SchedulerSerializer.toEntity(data);
  }

  async update(args: ScheduleEntity): Promise<ScheduleEntity> {
    const data = (await this.prisma.schedule.update({
      where: {
        id: args.getId(),
      },
      data: {
        status: args.getStatus(),
        rememberUser: args.getRememberUser(),
      },
    })) as unknown as IScheduleDBReflection;

    return SchedulerSerializer.toEntity(data);
  }

  async findSchedulesPending(): Promise<ScheduleEntity[]> {
    const data = (await this.prisma.schedule.findMany({
      where: {
        AND: [
          {
            status: StatusSchedules.PENDING,
          },
          {
            contractAt: {
              gte: new Date(new Date().setDate(new Date().getDate() - 1)),
            },
          },
          {
            rememberUser: true,
          },
        ],
      },
      select: {
        uuid: true,
        contractAt: true,
        organization: {
          select: {
            uuid: true,
            social_name: true,
          },
        },
        user: {
          select: {
            email: true,
          },
        },
      },
      orderBy: {
        organizationId: 'asc',
      },
    })) as ISchedulePendingDBReflection[];

    return SchedulerSerializer.toManyPendingEntity(data);
  }
}
