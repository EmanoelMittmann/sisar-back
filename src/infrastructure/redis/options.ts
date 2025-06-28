import { FactoryProvider, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_USER = process.env.REDIS_USER || 'guest'
const REDIS_PASS = process.env.REDIS_PASS || 'guest'

export const REDIS_CLIENT_FACTORY: FactoryProvider<Redis> = {
  provide: 'RedisClient',
  useFactory: () => {
    const logger = new Logger('REDIS_CLIENT_FACTORY');
    const client = new Redis({
      host: REDIS_HOST,
      port: +REDIS_PORT,
      username: REDIS_USER,
      password: REDIS_PASS
    });

    client.on('error', (error) => {
      logger.error('Redis client error', error);
    });

    return client;
  },
  inject: [],
};
