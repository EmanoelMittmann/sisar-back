import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/modules/users';
import { IUserRepository } from 'src/modules/users/repositories/user.repository';
import { PrismaService } from '../prisma/prisma.service';
import {
  PrismaFindOneContract,
  UserSerializer,
} from '../serializers/user-serializer';
import { Role } from 'orm-build/generated/prisma';

@Injectable()
export class UserPostgresRepository implements IUserRepository {
  private readonly userSerializer = UserSerializer;
  constructor(private readonly prisma: PrismaService) {}

  async create(args: UserEntity): Promise<UserEntity> {
    const user = await this.prisma.user.create({
      data: {
        email: args.getEmail(),
        password: args.getPassword(),
        name: args.getName(),
        phone: args.getPhone(),
        role: args.getRole() as Role,
        cpf: args.getCpf(),
        createdAt: args.getCreatedAt(),
        updatedAt: args.getUpdatedAt(),
      },
    });

    return this.userSerializer.SerializeFindOne(
      user as unknown as PrismaFindOneContract,
    );
  }

  findAll(args: UserEntity): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(args: UserEntity): Promise<UserEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        uuid: args.getUuid(),
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.userSerializer.SerializeFindOne(
      user as unknown as PrismaFindOneContract,
    );
  }

  async update(args: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(args: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return null;
    }

    return this.userSerializer.SerializeFindOne(
      user as unknown as PrismaFindOneContract,
    );
  }
}
