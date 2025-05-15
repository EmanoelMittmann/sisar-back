import { HttpService } from '@nestjs/axios';
import {
  BadGatewayException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { IChargeRequiredInput } from 'src/shared/contracts/charge.contract';
import { IAbstractGatewayRepository } from 'src/shared/contracts/gateway-abstract.contract';
import { IChargeResponse } from './_contracts-response';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { ISignatureRequiredInput } from 'src/shared/contracts/signature.contract';

@Injectable()
export class GatewayAsaasRepository implements IAbstractGatewayRepository {
  private logger = new Logger(GatewayAsaasRepository.name);
  private base_gateway_url: string;
  private headers: Record<string, string>;
  constructor(
    private readonly HttpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.base_gateway_url = this.configService.get(
      'GATEWAY_ASAAS_BASE_URL',
    ) as string;
    this.headers = {
      access_token: this.configService.get('GATEWAY_ASAAS_TOKEN') as string,
      'Content-Type': 'application/json',
    };
  }

  async create_charge(data: IChargeRequiredInput): Promise<IChargeResponse> {
    try {
      const response = await lastValueFrom(
        this.HttpService.post<IChargeResponse>(
          `${this.base_gateway_url}/payments`,
          data,
          {
            ...this.headers,
          },
        ),
      );

      return response.data;
    } catch (error) {
      this.logger.error(error);
      throw new BadGatewayException({
        message: 'Error creating charge',
      });
    }
  }

  create_customer(name: string, cpf: string): Promise<any> {
    throw new Error('Method not implement');
  }

  create_signature(data: ISignatureRequiredInput): Promise<any> {
    throw new Error('Method not implement');
  }

  delete_charge(uuid: string): Promise<any> {
    throw new Error('Method not implement');
  }

  delete_signature(uuid: string): Promise<any> {
    throw new Error('Method not implement');
  }

  find_by_uuid_customer(uuid: string): Promise<any> {
    throw new Error('Method not implement');
  }

  update_signature(uuid: string, data: ISignatureRequiredInput): Promise<any> {
    throw new Error('Method not implement');
  }
}
