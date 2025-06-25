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
import {
  ISubAccountContract,
  ISubAccountResponse,
} from 'src/shared/contracts/sub_account.contract';

@Injectable()
export class GatewayAsaasRepository implements IAbstractGatewayRepository {
  private logger = new Logger(GatewayAsaasRepository.name);
  private base_gateway_url: string;
  private headers: Record<string, string>;
  constructor(private readonly configService: ConfigService) {
    this.base_gateway_url = this.configService.get(
      'GATEWAY_ASAAS_BASE_URL',
    ) as string;
    this.headers = {
      access_token: `${this.configService.get('GATEWAY_ASAAS_TOKEN')}`,
      accept: 'application/json',
      'content-type': 'application/json',
    };
  }

  async create_charge(data: IChargeRequiredInput): Promise<IChargeResponse> {
    try {
      const request = await fetch(`${this.base_gateway_url}/payments`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data),
      });

      if (request.ok) {
        const response = (await request.json()) as IChargeResponse;

        return response;
      }

      throw new BadGatewayException({
        message: 'Error creating charge in Asaas',
      });
    } catch (error) {
      this.logger.error(error);
      throw new ChargeAsaasException('Error creating charge in Asaas');
    }
  }

  async get_charge_by_uuid(charge_uuid: string): Promise<IChargeResponse> {
    try {
      const request = await fetch(
        `${this.base_gateway_url}/payments/${charge_uuid}`,
        {
          method: 'GET',
          headers: this.headers,
        },
      );

      if (request.ok) {
        const response = (await request.json()) as IChargeResponse;

        return response;
      }

      throw new BadGatewayException({
        message: 'Error getting charge by UUID in Asaas',
      });
    } catch (error) {
      this.logger.error(error);
      throw new ChargeAsaasException('Error getting charge by UUID in Asaas');
    }
  }

  async create_customer(name: string, cpf: string): Promise<ICustomerResponse> {
    try {
      const request = await fetch(`${this.base_gateway_url}/customers`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          cpfCnpj: cpf,
        }),
      });

      if (request.ok) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const response = await request.json();

        return response as ICustomerResponse;
      }

      throw new BadGatewayException({
        message: 'Error creating customer in Asaas',
      });
    } catch (error) {
      throw new ClientAsaasException('Error creating customer in Asaas');
    }
  }

  async create_signature(
    data: ISignatureRequiredInput,
  ): Promise<ISignatureResponse> {
    try {
      const request = await fetch(`${this.base_gateway_url}/subscriptions`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data),
      });

      if (request.ok) {
        const response = (await request.json()) as ISignatureResponse;

        return response;
      }

      throw new BadGatewayException({
        message: 'Error creating signature in Asaas',
      });
    } catch (error) {
      this.logger.error(error);
      throw new SignatureAsaasException('Error creating signature in Asaas');
    }
  }

  async delete_charge(uuid: string): Promise<BaseDeleteResponse> {
    try {
      const request = await fetch(`${this.base_gateway_url}/payments/${uuid}`, {
        method: 'DELETE',
        headers: this.headers,
      });

      if (request.ok) {
        const response = (await request.json()) as BaseDeleteResponse;

        return response;
      }

      throw new BadGatewayException({
        message: 'Error deleting charge in Asaas',
      });
    } catch (error) {
      this.logger.error(error);
      throw new ChargeAsaasException('Error deleting charge in Asaas');
    }
  }

  async delete_signature(uuid: string): Promise<BaseDeleteResponse> {
    try {
      const request = await fetch(
        `${this.base_gateway_url}/subscriptions/${uuid}`,
        {
          method: 'DELETE',
          headers: this.headers,
        },
      );

      if (request.ok) {
        const response = (await request.json()) as BaseDeleteResponse;

        return response;
      }

      throw new BadGatewayException({
        message: 'Error deleting signature in Asaas',
      });
    } catch (error) {
      this.logger.error(error);
      throw new SignatureAsaasException('Error deleting signature in Asaas');
    }
  }

  async find_by_uuid_customer(uuid: string): Promise<ICustomerResponse> {
    try {
      const request = await fetch(
        `${this.base_gateway_url}/customers/${uuid}`,
        {
          method: 'GET',
          headers: this.headers,
        },
      );

      if (request.ok) {
        const response = (await request.json()) as ICustomerResponse;

        return response;
      }

      throw new BadGatewayException({
        message: 'Error finding customer by UUID in Asaas',
      });
    } catch (error) {
      this.logger.error(error);
      throw new ClientAsaasException('Error finding customer by UUID in Asaas');
    }
  }

  async create_sub_account(
    input: ISubAccountContract,
  ): Promise<ISubAccountResponse> {
    try {
      const request = await fetch(`${this.base_gateway_url}/accounts`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(input),
      });

      if (request.ok) {
        const response = (await request.json()) as ISubAccountResponse;

        return response;
      }
      console.error(await request.json());
      throw new BadGatewayException({
        message: 'Error creating sub account in Asaas',
      });
    } catch (error) {
      this.logger.error(error);
      throw new ClientAsaasException('Error creating sub account in Asaas');
    }
  }

  async update_signature(
    uuid: string,
    data: ISignatureRequiredInput,
  ): Promise<ISignatureResponse> {
    try {
      const request = await fetch(
        `${this.base_gateway_url}/subscriptions/${uuid}`,
        {
          method: 'PUT',
          headers: this.headers,
          body: JSON.stringify(data),
        },
      );

      if (request.ok) {
        const response = (await request.json()) as ISignatureResponse;

        return response;
      }

      throw new BadGatewayException({
        message: 'Error updating signature in Asaas',
      });
    } catch (error) {
      this.logger.error(error);
      throw new SignatureAsaasException('Error updating signature in Asaas');
    }
  }
}
