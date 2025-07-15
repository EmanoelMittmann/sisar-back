import { FactoryProvider, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';

const REDIS_URL = process.env.REDIS_URL;

export const REDIS_CLIENT_FACTORY: FactoryProvider<Redis> = {
  provide: 'RedisClient',
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const logger = new Logger('REDIS_CLIENT_FACTORY');
    const redisUrl = config.get<string>('REDIS_URL');

    if (!redisUrl) {
      throw new Error('REDIS_URL is not defined');
    }

    const client = new Redis(redisUrl);

    client.on('error', (error) => {
      logger.error('Redis client error', error);
    });

    return client;
  },
};
