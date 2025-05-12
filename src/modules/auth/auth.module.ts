import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { OrganizationModule } from '../organization/organization.module';
import { UserModule } from '../users/user.module';
import { SignInService } from './services/sign-in.service';
import { SignUpService } from './services/sign-up.service';
import { SignUpCompanyService } from './services/sign-up-company.service';
import { GenerateTokenService } from './services/generate-token.service';

@Module({
  imports: [
    UserModule,
    OrganizationModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [
    SignInService,
    SignUpService,
    SignUpCompanyService,
    GenerateTokenService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
