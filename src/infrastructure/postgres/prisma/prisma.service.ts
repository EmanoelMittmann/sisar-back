import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../orm-build/generated/prisma';
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      app.close();
    });
  }
}
