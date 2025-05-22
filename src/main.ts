import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './shared/filter-exceptions';

// @ts-expect-error @ts-ignore
async function bootstrap(): void {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.setGlobalPrefix('api');
  app.enableCors({ origin: true, credentials: true });
  app.enableShutdownHooks();
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(process.env.PORT ?? 8080);
}

bootstrap();
