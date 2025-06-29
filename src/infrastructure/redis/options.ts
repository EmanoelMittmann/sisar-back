import { FactoryProvider, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

export const REDIS_CLIENT_FACTORY: FactoryProvider<Redis> = {
  provide: 'RedisClient',
  useFactory: () => {
    const logger = new Logger('REDIS_CLIENT_FACTORY');

    if (!REDIS_URL) {
      throw new Error('REDIS_URL is not defined');
    }

    const client = new Redis(REDIS_URL);

    client.on('error', (error) => {
      logger.error('Redis client error', error);
    });

    return client;
  },
  inject: [],
};
