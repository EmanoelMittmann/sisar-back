import { CacheModuleAsyncOptions } from "@nestjs/cache-manager";
import { ConfigService } from "@nestjs/config";
import { redisStore } from "cache-manager-redis-store";

export const REDIS_OPTIONS: CacheModuleAsyncOptions = {
    isGlobal: true,
    useFactory: async (configService: ConfigService) => {
        const store = await redisStore({
            socket: {
                host: configService.get<string>('REDIS_HOST'),
                port: parseInt(configService.get<string>('REDIS_PORT')!),
            },
        });
        return {
            store: () => store,
        };
    },
    inject: [ConfigService],
}