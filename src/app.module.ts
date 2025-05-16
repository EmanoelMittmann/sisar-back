import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { UserModule } from './modules/users/user.module';
import { PrismaModule } from './infrastructure/postgres/prisma/prisma.module';
import { HashedModule } from './shared/hashed/hashed.module';
import { SchedulesModule } from './modules/schedules/schedule.module';
import { ConfigModule } from '@nestjs/config';
import { ServiceModule } from './modules/services/service.module';
import { PlansModule } from './modules/plans/plans.module';
import { EmailModule } from './infrastructure/warn-emails/warn-email.module';
import { RedisModule } from './infrastructure/redis/redis.module';
import { AuthMiddleware } from './modules/auth/middleware/auth.middleware';

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
    RedisModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaModule, RedisModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        {
          method: RequestMethod.ALL,
          path: '/auth/signup',
        },
        {
          method: RequestMethod.ALL,
          path: '/auth/signin',
        },
        {
          method: RequestMethod.POST,
          path: '/public/schedules/:uuid',
        },
      )
      .forRoutes('*');
  }
}
