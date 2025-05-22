import { NestFactory } from '@nestjs/core';
import { SchedulerModule } from './scheduler/scheduler.module';
import { Logger } from '@nestjs/common';

async function bootstrap_scheduler() {
  const logger = new Logger('WORKER');
  const worker = await NestFactory.create(SchedulerModule);

  await worker.listen(8081);
  logger.log('WORKER STARTED');
}

bootstrap_scheduler();
