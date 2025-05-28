import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger: Logger;
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request: Request = context.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      throw new UnauthorizedException({ message: 'Token is required' });
    }

    const token: string = request.headers.authorization.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException({ message: 'Token is required' });
    }
    try {
      await this.jwtService.verifyAsync(token.trim(), {
        secret: process.env.JWT_SECRET,
      });
    } catch (error) {
      this.logger.error('[AuthGuard] Token is invalid');
      this.logger.error(error);
      throw new UnauthorizedException({ message: 'Invalid token' });
    }
    this.logger.log('[AuthGuard] Token is valid');
    return true;
  }
}
