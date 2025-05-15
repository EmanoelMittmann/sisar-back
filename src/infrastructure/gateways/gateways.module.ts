import { Module } from "@nestjs/common";
import { AsaasModule } from "./asaas/asaas.module";
import { HttpModule } from "@nestjs/axios";


@Module({
    imports: [HttpModule, AsaasModule]
})
export class GatewaysModule { }