import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

// @ts-expect-error @ts-ignore
async function bootstrap(): void {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({ origin: true, credentials: true });
  app.enableShutdownHooks();
  app.useLogger(new Logger());
  await app.listen(process.env.PORT ?? 8080);
}

bootstrap();
