import { Module } from '@nestjs/common';
import { FindUserByIdService } from './services/find-user-by-id.service';
import { UserPostgresRepository } from 'src/infrastructure/postgres/repositories/user.repository';

@Module({
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserPostgresRepository,
    },
    FindUserByIdService,
  ],
  exports: ['IUserRepository', FindUserByIdService],
})
export class UserModule {}
