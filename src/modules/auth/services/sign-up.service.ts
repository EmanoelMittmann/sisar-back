import { UserEntity } from 'src/modules/users';
import { IUserRepository } from 'src/modules/users/repositories/user.repository';
import { BaseService } from 'src/shared/contracts';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IHashedRepository } from 'src/shared/contracts/hash.contract';

@Injectable()
export class SignUpService implements BaseService<UserEntity, UserEntity> {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('IHashedRepository')
    private readonly hashedRepository: IHashedRepository,
  ) {}

  async execute(args: UserEntity): Promise<UserEntity> {
    const exist = await this.userRepository.findByEmail(args.getEmail());

    if (exist) {
      throw new BadRequestException({ message: 'User already exists' });
    }

    const hashPassword = await this.hashedRepository.hash(args.getPassword());

    args.setPassword(hashPassword);

    return await this.userRepository.create(args);
  }
}
