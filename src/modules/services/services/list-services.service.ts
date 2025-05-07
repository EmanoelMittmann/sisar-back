import { Inject, Injectable } from "@nestjs/common";
import { BaseService } from "src/shared/contracts";
import { ListServicesDto } from "../dtos/list-services.dto";
import { ServiceSerializer } from "../serializers/service.serializer";
import { IServiceRepository } from "../repositories/services.repository";
import { ServiceEntity } from "../entities/service.entity";


@Injectable()
export class ListServicesService implements BaseService<ServiceEntity, ListServicesDto[]> {

    constructor(
        @Inject('IServiceRepository')
        private readonly serviceRepository: IServiceRepository,
    ) { }

    async execute(args: ServiceEntity): Promise<ListServicesDto[]> {
        const services = await this.serviceRepository.findAll(args)
        return new ServiceSerializer().toList(services);
    }

}