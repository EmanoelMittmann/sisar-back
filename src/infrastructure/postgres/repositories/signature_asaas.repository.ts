import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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

  createSignature(customer_id: number, type_plan: TypeCharge): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
