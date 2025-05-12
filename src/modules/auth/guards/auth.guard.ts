import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger: Logger;
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      throw new UnauthorizedException({ message: 'Token is required' });
    }

    const token: string = request.headers.authorization.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException({ message: 'Token is required' });
    }
    this.logger.log('[AuthGuard] Get Token sucessfully');
    try {
      const payload = await this.jwtService.verifyAsync(token.trim(), {
        secret: process.env.JWT_SECRET,
      });
    } catch (error) {
      throw new UnauthorizedException({ message: 'Invalid token' });
    }
    this.logger.log('[AuthGuard] Token is valid');
    return true;
  }
}
