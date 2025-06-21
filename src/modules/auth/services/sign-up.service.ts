import { UserEntity } from 'src/modules/users';
import { IUserRepository } from 'src/modules/users/repositories/user.repository';
import { BaseService } from 'src/shared/contracts';
import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { IHashedRepository } from 'src/shared/contracts/hash.contract';
import { IAbstractGatewayRepository } from 'src/shared/contracts/gateway-abstract.contract';
import { ICustomerAsaasRepository } from 'src/infrastructure/postgres/repositories/customer_asaas.repository';

@Injectable()
export class SignUpService implements BaseService<UserEntity, UserEntity> {
  private logger = new Logger(SignUpService.name);
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('IHashedRepository')
    private readonly hashedRepository: IHashedRepository,
    @Inject('IAbstractGatewayRepository')
    private readonly gatewayRepository: IAbstractGatewayRepository,
    @Inject('ICustomerAsaasRepository')
    private readonly customerAsaasRepository: ICustomerAsaasRepository,
  ) {}

  async execute(args: UserEntity): Promise<UserEntity> {
    const exist = await this.userRepository.findByEmail(args.getEmail());

    if (exist) {
      throw new BadRequestException({ message: 'User already exists' });
    }

    const hashPassword = await this.hashedRepository.hash(args.getPassword());

    args.setPassword(hashPassword);

    const user = await this.userRepository.create(args);

    await this.create_customer_asaas(
      user.getId(),
      user.getName(),
      user.getCpf(),
    );

    return user;
  }

  private async create_customer_asaas(
    user_id: number,
    name: string,
    cpf: string,
  ): Promise<void> {
    try {
      const create_customer = await this.gatewayRepository.create_customer(
        name,
        cpf,
      );
      await this.customerAsaasRepository.createCustomer(
        user_id,
        create_customer.id,
      );
      return;
    } catch (error) {
      this.logger.error('Error creating customer', error);
      throw new BadRequestException({
        message: 'Error creating customer',
      });
    }
  }
}
