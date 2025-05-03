import { BaseCrudOperationsContract } from 'src/shared/contracts';
import { UserEntity } from '../entities/user.entity';

export interface IUserRepository extends BaseCrudOperationsContract<
  UserEntity,
  UserEntity
> {
  findByEmail(email: string): Promise<UserEntity | null>;
};
