import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SignInService } from '../services/sign-in.service';
import { SignUpService } from '../services/sign-up.service';
import { GenerateTokenService } from '../services/generate-token.service';
import { SignInDto } from '../dtos/sign-in.dto';
import { UserEntity } from 'src/modules/users';
import { SignUpDto } from '../dtos/signup-up.dto';
import { SignUpCompanyDto } from '../dtos/sign-up-company.dto';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { SignUpCompanyService } from '../services/sign-up-company.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signInService: SignInService,
    private readonly signUpService: SignUpService,
    private readonly signUpCompanyService: SignUpCompanyService,
    private readonly generateTokenService: GenerateTokenService,
  ) {}

  @HttpCode(200)
  @Post('/signin')
  async signIn(@Body() body: SignInDto): Promise<{ token: string }> {
    const entity = new UserEntity();
    entity.setEmail(body.email);
    entity.setPassword(body.password);

    const user = await this.signInService.execute(entity);

    const token = await this.generateTokenService.execute(user);

    return {
      token,
    };
  }

  @HttpCode(200)
  @Post('/signup')
  async signUp(@Body() body: SignUpDto): Promise<{ message: string }> {
    const user = new UserEntity();
    user.setName(body.name);
    user.setEmail(body.email);
    user.setPassword(body.password);
    user.setCpf(body.cpf);

    await this.signUpService.execute(user);

    return {
      message: 'User created successfully',
    };
  }

  @HttpCode(200)
  @Post('/signup-company')
  async signUpCompany(
    @Body() body: SignUpCompanyDto,
  ): Promise<{ message: string }> {
    const organization = new OrganizationEntity();
    organization.setSocialName(body.organization_name);
    organization.setEmail(body.organization_email);
    organization.setCnpj(body.cnpj);
    organization.setOffice(body.type_service);
    organization.setPhone(body.phone);

    await this.signUpCompanyService.execute(organization);

    return {
      message: 'Company created successfully',
    };
  }
}
