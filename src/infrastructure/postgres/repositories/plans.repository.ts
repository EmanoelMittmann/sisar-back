import { Injectable } from '@nestjs/common';
import { PlanEntity } from 'src/modules/plans/entities/plan.entity';
import { IPlanRepository } from 'src/modules/plans/repositories/plan.repository';
import { PrismaService } from '../prisma/prisma.service';
import {
  IPlanDBReflection,
  PlansSerializer,
} from '../serializers/plans-serializer';
import { Recurrent } from 'orm-build/generated/prisma';

@Injectable()
export class PlansPostgresRepository implements IPlanRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: PlanEntity): Promise<PlanEntity> {
    const plan = (await this.prisma.plan.create({
      data: {
        name: args.getName(),
        price: args.getPrice(),
        recurrent: args.getRecurrent() as Recurrent,
        description: args.getDescription(),
        organizationId: args.getOrganization().getId(),
      },
    })) as unknown as IPlanDBReflection;

    return PlansSerializer.toEntity(plan);
  }

  async findAll(args: PlanEntity): Promise<PlanEntity[]> {
    const plans = (await this.prisma.plan.findMany({
      where: {
        organizationId: args.getOrganization().getId(),
      },
    })) as unknown as IPlanDBReflection[];

    return PlansSerializer.toManyEntity(plans);
  }

  async findOne(args: PlanEntity): Promise<PlanEntity> {
    const plan = (await this.prisma.plan.findUnique({
      where: {
        id: args.getId(),
      },
    })) as unknown as IPlanDBReflection;

    return PlansSerializer.toEntity(plan);
  }

  async update(args: PlanEntity): Promise<PlanEntity> {
    const plan = (await this.prisma.plan.update({
      where: {
        id: args.getId(),
      },
      data: {
        name: args.getName(),
        price: args.getPrice(),
        recurrent: args.getRecurrent() as Recurrent,
        description: args.getDescription(),
      },
    })) as unknown as IPlanDBReflection;

    return PlansSerializer.toEntity(plan);
  }

  async delete(args: PlanEntity): Promise<PlanEntity> {
    const plan = (await this.prisma.plan.delete({
      where: {
        id: args.getId(),
      },
    })) as unknown as IPlanDBReflection;

    return PlansSerializer.toEntity(plan);
  }
}
