import { Module } from '@nestjs/common';
import { REDIS_CLIENT_FACTORY } from './options';

@Module({
  providers: [REDIS_CLIENT_FACTORY],
  exports: ['RedisClient'],
})
export class RedisModule {}
