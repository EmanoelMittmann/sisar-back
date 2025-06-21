import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ICustomerAsaasRepository {
  createCustomer(user_id: number, customer_asaas_id: string): Promise<void>;
  findByUserId(user_id: string): Promise<string | null>;
}

@Injectable()
export class CustomerAsaasRepository implements ICustomerAsaasRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCustomer(
    user_id: number,
    customer_asaas_id: string,
  ): Promise<void> {
    await this.prisma.customerAsaas.create({
      data: {
        customerAsaasId: customer_asaas_id,
        userId: user_id,
      },
    });
  }

  async findByUserId(user_id: string): Promise<string | null> {
    const data = await this.prisma.customerAsaas.findFirst({
      where: {
        user: {
          uuid: user_id,
        },
      },
      select: {
        customerAsaasId: true,
      },
    });

    if (!data) {
      return null;
    }

    return data.customerAsaasId;
  }
}
