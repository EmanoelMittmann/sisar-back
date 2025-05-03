import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/modules/users';
import { BaseService } from 'src/shared/contracts';
import { JwtDataContract } from 'src/shared/contracts/jwt-data.contract';

@Injectable()
export class GenerateTokenService implements BaseService<UserEntity, string> {
  constructor(private readonly jwtService: JwtService) { }

  async execute(user: UserEntity): Promise<string> {
    const payload: JwtDataContract = {
      sub: user.getUuid(),
      username: user.getName(),
      role: user.getRole(),
      expired_at: Math.floor(Date.now() / 1000) + (5 * 3600), // Token expires in 5 hours
    };

    return this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
  }
}
