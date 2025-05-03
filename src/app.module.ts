import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { UserModule } from './modules/users/user.module';
import { PrismaModule } from './infrastructure/postgres/prisma/prisma.module';
import { HashedModule } from './shared/hashed/hashed.module';

@Module({
  imports: [
    UserModule,
    OrganizationModule,
    AuthModule,
    PrismaModule,
    HashedModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaModule],
})
export class AppModule { }
