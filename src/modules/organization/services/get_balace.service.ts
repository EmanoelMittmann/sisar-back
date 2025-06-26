import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/postgres/prisma/prisma.service';
import { BaseService } from 'src/shared/contracts';

@Injectable()
export class GetBalanceOrganization implements BaseService<string, number> {
  constructor(private prisma: PrismaService) {}
  async execute(uuid: string): Promise<number> {
    if (!uuid) {
      throw new NotFoundException('Empresa não encontrada');
    }

    const credentials = await this.prisma.organizationAsaasAccount.findFirst({
      where: {
        organization: {
          uuid: uuid,
        },
      },
      select: {
        apiKey: true,
      },
    });

    if (!credentials || !credentials.apiKey) {
      throw new NotFoundException('Credenciais da empresa não encontradas');
    }

    return this.consultBalance(credentials?.apiKey);
  }

  private async consultBalance(credential: string): Promise<number> {
    try {
      const request = await fetch(
        `${process.env.GATEWAY_ASAAS_BASE_URL}/finance/payment/statistics?status=CONFIRMED`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            access_token: credential,
          },
        },
      );

      if (request.ok) {
        const response = (await request.json()) as { value: number };
        return response.value;
      }

      await this.prisma.paymentsExceptions.create({
        data: {
          input: JSON.stringify({ credential }),
          reason: JSON.stringify(await request.json()),
        },
      });
      throw new InternalServerErrorException(
        'Erro ao consultar o saldo da empresa. Por favor, tente novamente mais tarde.',
      );
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao consultar o saldo da empresa. Por favor, tente novamente mais tarde.',
      );
    }
  }
}
