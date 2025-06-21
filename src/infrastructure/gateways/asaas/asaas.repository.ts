import { HttpService } from '@nestjs/axios';
import { BadGatewayException, Injectable, Logger } from '@nestjs/common';
import { IChargeRequiredInput } from 'src/shared/contracts/charge.contract';
import { IAbstractGatewayRepository } from 'src/shared/contracts/gateway-abstract.contract';
import {
  BaseDeleteResponse,
  IChargeResponse,
  ICustomerResponse,
  ISignatureResponse,
} from './_contracts-response';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { ISignatureRequiredInput } from 'src/shared/contracts/signature.contract';
import { ClientAsaasException } from 'src/shared/exceptions/client-asaas.exception';
import { ChargeAsaasException } from 'src/shared/exceptions/charge-asaas.exception';
import { SignatureAsaasException } from 'src/shared/exceptions/signature-asaas.exception';

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
      throw new ChargeAsaasException('Error creating charge in Asaas');
    }
  }

  async create_customer(name: string, cpf: string): Promise<ICustomerResponse> {
    try {
      const response = await lastValueFrom(
        this.HttpService.post<ICustomerResponse>(
          `${this.base_gateway_url}/customers`,
          {
            name: name,
            cpfCnpj: cpf,
          },
          {
            ...this.headers,
          },
        ),
      );

      return response.data;
    } catch (error) {
      this.logger.error(error);
      throw new ClientAsaasException('Error creating customer in Asaas');
    }
  }

  async create_signature(
    data: ISignatureRequiredInput,
  ): Promise<ISignatureResponse> {
    try {
      const response = await lastValueFrom(
        this.HttpService.post<ISignatureResponse>(
          `${this.base_gateway_url}/subscriptions`,
          data,
          {
            ...this.headers,
          },
        ),
      );

      return response.data;
    } catch (error) {
      this.logger.error(error);
      throw new SignatureAsaasException('Error creating signature in Asaas');
    }
  }

  async delete_charge(uuid: string): Promise<BaseDeleteResponse> {
    try {
      const response = await lastValueFrom(
        this.HttpService.delete<BaseDeleteResponse>(
          `${this.base_gateway_url}/payments/${uuid}`,
          {
            headers: this.headers,
          },
        ),
      );

      return response.data;
    } catch (error) {
      this.logger.error(error);
      throw new ChargeAsaasException('Error deleting charge in Asaas');
    }
  }

  async delete_signature(uuid: string): Promise<BaseDeleteResponse> {
    try {
      const response = await lastValueFrom(
        this.HttpService.delete<BaseDeleteResponse>(
          `${this.base_gateway_url}/subscriptions/${uuid}`,
          {
            headers: this.headers,
          },
        ),
      );

      return response.data;
    } catch (error) {
      this.logger.error(error);
      throw new SignatureAsaasException('Error deleting signature in Asaas');
    }
  }

  async find_by_uuid_customer(uuid: string): Promise<ICustomerResponse> {
    try {
      const response = await lastValueFrom(
        this.HttpService.get<ICustomerResponse>(
          `${this.base_gateway_url}/customers/${uuid}`,
          {
            headers: this.headers,
          },
        ),
      );

      return response.data;
    } catch (error) {
      this.logger.error(error);
      throw new ClientAsaasException('Error finding customer by UUID in Asaas');
    }
  }

  async update_signature(
    uuid: string,
    data: ISignatureRequiredInput,
  ): Promise<ISignatureResponse> {
    try {
      const response = await lastValueFrom(
        this.HttpService.put<ISignatureResponse>(
          `${this.base_gateway_url}/subscriptions/${uuid}`,
          data,
          {
            headers: this.headers,
          },
        ),
      );

      return response.data;
    } catch (error) {
      this.logger.error(error);
      throw new SignatureAsaasException('Error updating signature in Asaas');
    }
  }
}
