import { Inject, Injectable } from "@nestjs/common";
import { IServiceRepository } from "../repositories/services.repository";
import { BaseService } from "src/shared/contracts";
import { ServiceEntity } from "../entities/service.entity";

@Injectable()
export class UpdateServiceService implements BaseService<ServiceEntity, ServiceEntity> {
    constructor(
        @Inject('IServiceRepository')
        private readonly serviceRepository: IServiceRepository
    ) { }

    async execute(args: ServiceEntity): Promise<ServiceEntity> {
        return this.serviceRepository.update(args)
    }
}
