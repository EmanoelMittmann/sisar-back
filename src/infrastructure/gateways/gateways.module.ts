import { Module } from '@nestjs/common';
import { AsaasModule } from './asaas/asaas.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, AsaasModule],
  exports: [AsaasModule],
})
export class GatewaysModule {}
