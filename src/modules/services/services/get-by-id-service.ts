import { Injectable, NotFoundException } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import { IServiceRepository } from "../repositories/services.repository";
import { BaseService } from "src/shared/contracts";
import { ServiceEntity } from "../entities/service.entity";
import { ServiceSerializer } from "../serializers/service.serializer";
import { ListServicesDto } from "../dtos/list-services.dto";

@Injectable()
export class GetByIdServiceService implements BaseService<ServiceEntity, ListServicesDto> {
    constructor(
        @Inject('IServiceRepository')
        private readonly serviceRepository: IServiceRepository,
    ) { }

    async execute(args: ServiceEntity): Promise<ListServicesDto> {
        const service = await this.serviceRepository.findOne(args)

        if (!service) {
            throw new NotFoundException('Service not found')
        }
        return new ServiceSerializer().toListDto(service)
    }
}   