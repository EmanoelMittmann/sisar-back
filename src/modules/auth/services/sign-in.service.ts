import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { UserEntity } from 'src/modules/users';
import { IUserRepository } from 'src/modules/users/repositories/user.repository';
import { BaseService } from 'src/shared/contracts';
import { IHashedRepository } from 'src/shared/contracts/hash.contract';

@Injectable()
export class SignInService implements BaseService<UserEntity, UserEntity> {
  private logger = new Logger(SignInService.name.toUpperCase());
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('IHashedRepository')
    private readonly hashedRepository: IHashedRepository,
  ) {}

  async execute(user: UserEntity): Promise<UserEntity> {
    this.logger.log(
      `Executing SignInService with user: ${user.getEmail()} ${user.getPassword()}`,
    );
    const findUser = await this.userRepository.findByEmail(user.getEmail());

    if (!findUser) {
      this.logger.log(
        `User ${user.getEmail()} failed to sign in with invalid email`,
      );
      throw new UnauthorizedException({ message: 'Usuário não encontrado' });
    }
    const comparePassword = await this.hashedRepository.compare(
      user.getPassword(),
      findUser.getPassword(),
    );

    if (!comparePassword) {
      this.logger.log(
        `User ${user.getEmail()} failed to sign in with invalid password`,
      );
      throw new UnauthorizedException({ message: 'Senha ou email inválido' });
    }

    this.logger.log(`User ${user.getEmail()} signed in successfully`);

    return findUser;
  }
}
