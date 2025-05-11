import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { UserModule } from './modules/users/user.module';
import { PrismaModule } from './infrastructure/postgres/prisma/prisma.module';
import { HashedModule } from './shared/hashed/hashed.module';
import { SchedulesModule } from './modules/schedules/schedule.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { REDIS_OPTIONS } from './infrastructure/redis/options';
import { ServiceModule } from './modules/services/service.module';
import { PlansModule } from './modules/plans/plans.module';
import { EmailModule } from './infrastructure/warn-emails/warn-email.module';

@Module({
  imports: [
    UserModule,
    OrganizationModule,
    AuthModule,
    PrismaModule,
    HashedModule,
    OrganizationModule,
    SchedulesModule,
    ServiceModule,
    EmailModule,
    PlansModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register(REDIS_OPTIONS)
  ],
  controllers: [AppController],
  providers: [AppService, PrismaModule],
})
export class AppModule { }
