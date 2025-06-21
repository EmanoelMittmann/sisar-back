import { Module } from '@nestjs/common';
import { GatewayAsaasRepository } from './asaas.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'IAbstractGatewayRepository',
      useClass: GatewayAsaasRepository,
    },
  ],
  exports: ['IAbstractGatewayRepository'],
})
export class AsaasModule {}
