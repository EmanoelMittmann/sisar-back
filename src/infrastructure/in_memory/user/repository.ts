import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { IUserRepository } from 'src/modules/users/repositories/user.repository';

@Injectable()
export class UserInMemoryRepository implements IUserRepository {
  public users: UserEntity[] = [];

  async create(args: UserEntity): Promise<UserEntity> {
    this.users.push(args);
    return Promise.resolve(this.users[this.users.length - 1]);
  }
  async delete(args: UserEntity): Promise<UserEntity> {
    const deleted = this.users.filter((user) => user.getId() !== args.getId());
    this.users = deleted;
    return Promise.resolve(args);
  }
  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = this.users.find((user) => user.getEmail() === email);

    if (!user) {
      return null;
    }

    return Promise.resolve(user);
  }
  findAll(args: UserEntity): Promise<UserEntity[]> {
    return Promise.resolve(this.users);
  }
  async findOne(args: UserEntity): Promise<UserEntity | null> {
    const user = this.users.find((entity) => entity.getId() === args.getId());

    if (!user) {
      return null;
    }

    return Promise.resolve(user);
  }
  async update(args: UserEntity): Promise<UserEntity> {
    const index = this.users.findIndex((user) => user.getId() === args.getId());
    this.users[index] = args;
    return Promise.resolve(args);
  }
}
