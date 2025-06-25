import { Injectable } from '@nestjs/common';
import { PlanEntity } from 'src/modules/plans/entities/plan.entity';
import { IPlanRepository } from 'src/modules/plans/repositories/plan.repository';
import { PrismaService } from '../prisma/prisma.service';
import {
  IPlanDBReflection,
  PlansSerializer,
} from '../serializers/plans-serializer';

@Injectable()
export class PlansPostgresRepository implements IPlanRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: PlanEntity): Promise<PlanEntity> {
    const plan = (await this.prisma.plan.create({
      data: {
        name: args.getName(),
        price: Math.round(+args.getPrice() * 100),
        description: args.getDescription(),
        quantityInstallment: args.getQuantityInstallments(),
        dueDate: args.getDueDate(),
        organization: {
          connect: {
            uuid: args.getOrganization().getUuid(),
          },
        },
      },
    })) as unknown as IPlanDBReflection;

    return PlansSerializer.toEntity(plan);
  }

  async findAll(args: PlanEntity): Promise<PlanEntity[]> {
    const plans = (await this.prisma.plan.findMany({
      where: {
        organization: {
          uuid: args.getOrganization().getUuid(),
        },
      },
    })) as unknown as IPlanDBReflection[];

    return PlansSerializer.toManyEntity(plans);
  }

  async findOne(args: PlanEntity): Promise<PlanEntity> {
    const plan = (await this.prisma.plan.findUnique({
      where: {
        uuid: args.getUuid(),
      },
    })) as unknown as IPlanDBReflection;

    return PlansSerializer.toEntity(plan);
  }

  async update(args: PlanEntity): Promise<PlanEntity> {
    const plan = (await this.prisma.plan.update({
      where: {
        uuid: args.getUuid(),
      },
      data: {
        name: args.getName(),
        price: Math.round(+args.getPrice() * 100),
        quantityInstallment: args.getQuantityInstallments(),
        description: args.getDescription(),
      },
    })) as unknown as IPlanDBReflection;

    return PlansSerializer.toEntity(plan);
  }

  async delete(args: PlanEntity): Promise<PlanEntity> {
    const plan = (await this.prisma.plan.delete({
      where: {
        uuid: args.getUuid(),
      },
    })) as unknown as IPlanDBReflection;

    return PlansSerializer.toEntity(plan);
  }

  async findByUserId(user_id: string): Promise<PlanEntity[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call,  @typescript-eslint/no-unsafe-member-access,
    const plans = await this.prisma.userPlans.findMany({
      where: {
        user: {
          uuid: user_id,
        },
      },
      include: {
        plan: true,
      },
    });

    if (!plans || !Array.isArray(plans)) {
      return [];
    }

    return (
      plans
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
        .flatMap((i) => i.plan)
        .map((item) => PlansSerializer.toEntity(item as IPlanDBReflection))
    );
  }

  async assocUserToPlan(
    user_id: string,
    plan_id: string,
  ): Promise<{
    dueDate: Date;
    price: number;
    quantityInstallment: number;
  }> {
    const data = await this.prisma.userPlans.create({
      data: {
        user: {
          connect: {
            uuid: user_id,
          },
        },
        plan: {
          connect: {
            uuid: plan_id,
          },
        },
      },
      select: {
        plan: {
          select: {
            dueDate: true,
            price: true,
            quantityInstallment: true,
          },
        },
      },
    });

    const planData = data.plan as {
      dueDate: Date;
      price: number;
      quantityInstallment: number;
    };

    return {
      dueDate: planData.dueDate,
      price: planData.price,
      quantityInstallment: planData.quantityInstallment,
    };
  }
}
