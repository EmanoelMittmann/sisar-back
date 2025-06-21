import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';

enum TypeCharge {
  SIGNATURE = 'SIGNATURE',
  CHARGE = 'CHARGE',
}

export interface ISignatureAsaasRepository {
  createSignature(customer_id: number, type_plan: TypeCharge): Promise<void>;
}

@Injectable()
export class SignatureAsaasRepository implements ISignatureAsaasRepository {
  constructor(private prisma: PrismaService) {}

  async createSignature(
    customer_id: number,
    type_plan: TypeCharge,
  ): Promise<void> {
    await this.prisma.ordersAsaas.create({
      data: {
        customerAsaasId: customer_id,
        typeOrder: type_plan,
        transactionId: randomUUID(),
      },
    });
  }
}
