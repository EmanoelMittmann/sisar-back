import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/modules/users';
import { IUserRepository } from 'src/modules/users/repositories/user.repository';
import { BaseService } from 'src/shared/contracts';
import { IHashedRepository } from 'src/shared/contracts/hash.contract';
import { HashedRepository } from 'src/shared/hashed/hashed-repository.hashed';

@Injectable()
export class SignInService implements BaseService<UserEntity, UserEntity> {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('IHashedRepository')
    private readonly hashedRepository: IHashedRepository,
  ) {}

  async execute(user: UserEntity): Promise<UserEntity> {
    const findUser = await this.userRepository.findByEmail(user.getEmail());

    if (!findUser) {
      throw new UnauthorizedException({ message: 'Invalid credentials' });
    }
    const comparePassword = await this.hashedRepository.compare(
      user.getPassword(),
      findUser.getPassword(),
    );

    if (!comparePassword) {
      throw new UnauthorizedException({ message: 'Invalid credentials' });
    }

    return findUser;
  }
}
