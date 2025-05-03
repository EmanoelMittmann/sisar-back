import { BaseService } from 'src/shared/contracts';
import { IUserRepository } from '../repositories/user.repository';
import { UserEntity } from '../entities/user.entity';
import { NotFoundException } from '@nestjs/common';

export class FindUserByIdService implements BaseService<string, UserEntity> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(args: string): Promise<UserEntity> {
    // @TODO create class serialize to static method
    const toEntity = new UserEntity();
    toEntity.setUuid(args);

    const user = await this.userRepository.findOne(toEntity);

    if (!user) throw new NotFoundException({ message: 'User not found' });

    return user;
  }
}
