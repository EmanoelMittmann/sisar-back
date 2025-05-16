import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtDataContract } from 'src/shared/contracts/jwt-data.contract';
import { FindUserByIdService } from 'src/modules/users/services/find-user-by-id.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private jwt_service: JwtService,
    private readonly user_service: FindUserByIdService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const HEAD = req.headers.authorization;

    if (!HEAD) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const [prefix, token] = HEAD.split(' ');

    if (!prefix) {
      throw new ForbiddenException({
        message: 'Type of token is not defined',
      });
    }

    if (!token) {
      throw new ForbiddenException({
        message: 'Token required',
      });
    }

    const verifyToken = await this.jwt_service.verifyAsync<JwtDataContract>(
      token,
      {
        secret: process.env.JWT_SECRET,
      },
    );

    const findById = await this.user_service.execute(verifyToken.sub);

    if (!findById) {
      throw new ForbiddenException({
        message: 'User not found',
      });
    }

    req['user'] = findById;

    next();
  }
}
