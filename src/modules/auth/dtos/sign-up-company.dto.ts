import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { IsEmail } from 'class-validator';

export class SignUpCompanyDto {
  @IsString()
  @IsNotEmpty()
  organization_name: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  type_service: string;

  @IsEmail()
  @IsNotEmpty()
  organization_email: string;
}
