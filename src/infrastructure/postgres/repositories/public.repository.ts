import { Injectable } from '@nestjs/common';
import { ISchedulePublicRepository } from 'src/modules/schedules/repositories/public.repository';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePublicScheduleDto } from 'src/modules/schedules/dtos/public-schedule.dto';

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
}
