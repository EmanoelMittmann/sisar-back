import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { UserModule } from './modules/users/user.module';
import { PrismaModule } from './infrastructure/postgres/prisma/prisma.module';
import { HashedModule } from './shared/hashed/hashed.module';
import { ScheduleModule } from './modules/schedules/schedule.module';
import { WarnEmailModule } from './infrastructure/warn-emails/warn-email.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { REDIS_OPTIONS } from './infrastructure/redis/options';
import { ServiceModule } from './modules/services/service.module';

@Module({
  imports: [
    UserModule,
    OrganizationModule,
    AuthModule,
    PrismaModule,
    HashedModule,
    OrganizationModule,
    ScheduleModule,
    ServiceModule,
    WarnEmailModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register(REDIS_OPTIONS)
  ],
  controllers: [AppController],
  providers: [AppService, PrismaModule],
})
export class AppModule { }
