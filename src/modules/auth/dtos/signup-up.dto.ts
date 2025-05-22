import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { IsEmail } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  confirm_password: string;

  @IsBoolean()
  @IsNotEmpty()
  is_company: boolean;

  @IsBoolean()
  @IsNotEmpty()
  is_client: boolean;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
}
