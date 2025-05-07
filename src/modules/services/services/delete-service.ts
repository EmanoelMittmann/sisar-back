import { Inject, Injectable } from "@nestjs/common";
import { ServiceEntity } from "../entities/service.entity";
import { BaseService } from "src/shared/contracts";
import { IServiceRepository } from "../repositories/services.repository";


@Injectable()
export class DeleteServiceService implements BaseService<ServiceEntity, ServiceEntity> {
    constructor(
        @Inject('IServiceRepository')
        private readonly serviceRepository: IServiceRepository
    ) { }

    async execute(args: ServiceEntity): Promise<ServiceEntity> {
        return this.serviceRepository.delete(args)
    }
}