import {
  BadGatewayException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/postgres/prisma/prisma.service';
import { BaseService } from 'src/shared/contracts';
import { IAbstractGatewayRepository } from 'src/shared/contracts/gateway-abstract.contract';
import { BillingType } from 'src/shared/enum/billing-type.enum';

@Injectable()
export class GenerateChargeService
  implements
    BaseService<{ service_id: string; client_id: string }, { link: string }>
{
  constructor(
    private prisma: PrismaService,
    @Inject('IAbstractGatewayRepository')
    private readonly gateway: IAbstractGatewayRepository,
  ) {}

  async execute(args: {
    service_id: string;
    client_id: string;
  }): Promise<{ link: string }> {
    const today = new Date();
    const current_customer_asaas = await this.prisma.customerAsaas.findFirst({
      where: {
        user: { uuid: args.client_id },
      },
    });

    if (!current_customer_asaas) {
      throw new NotFoundException('Customer not found in Asaas');
    }

    const service = await this.prisma.service.findFirst({
      where: {
        uuid: args.service_id,
      },
      select: {
        price: true,
      },
    });

    if (!service) {
      throw new NotFoundException('Serviço não encontrado');
    }

    const charge = await this.gateway.create_charge({
      customer_uuid: current_customer_asaas.customerAsaasId,
      billing_type: BillingType.CREDIT_CARD,
      value: parseFloat(Number(service.price).toFixed(2)),
      dueDate: new Date(
        today.getDate() + 1,
        today.getMonth(),
        today.getFullYear(),
      ),
    });

    if (!charge) {
      throw new BadGatewayException('Error creating charge in Asaas');
    }

    if (!charge.invoiceUrl) {
      const recoveryCharge = await this.gateway.get_charge_by_uuid(charge.id);

      if (!recoveryCharge.invoiceUrl) {
        throw new BadGatewayException('Error retrieving charge invoice URL');
      }

      return { link: recoveryCharge.invoiceUrl };
    }

    return { link: charge.invoiceUrl };
  }
}
