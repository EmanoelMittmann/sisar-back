import { OrganizationEntity } from "src/modules/organization/entities/organization.entity";
import { ScheduleEntity } from "src/modules/schedules/entities/schedule.entity";
import { ServiceEntity } from "src/modules/services/entities/service.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { StatusSchedules } from "src/shared/enum/status_schedules.enum";

export interface IScheduleDBReflection {
    id: number;
    uuid: string;
    organizationId: number;
    serviceId: number;
    userId: number;
    contract_at: Date;
    status: StatusSchedules;
    remember_user: boolean;
    created_at: Date;
    updated_at: Date;
    canceled_at: Date | null;
}

export interface ISchedulePendingDBReflection {
    uuid: string;
    contractAt: Date;
    organization: {
        uuid: string;
        social_name: string;
    };
    user: {
        email: string;
    };
}

export class SchedulerSerializer {

    static toEntity(data: IScheduleDBReflection): ScheduleEntity {
        const entity = new ScheduleEntity()
        entity.setId(data.id)
        entity.setUuid(data.uuid)

        const organization = new OrganizationEntity()
        organization.setId(data.organizationId)
        entity.setOrganization(organization)

        const service = new ServiceEntity()
        service.setId(data.serviceId)
        entity.setService(service)

        const user = new UserEntity()
        user.setId(data.userId)
        entity.setUser(user)

        entity.setContractAt(data.contract_at)
        entity.setStatus(data.status)

        return entity
    }

    static toManyEntity(data: IScheduleDBReflection[]): ScheduleEntity[] {
        return data.map(this.toEntity)
    }

    static toManyPendingEntity(data: ISchedulePendingDBReflection[]): ScheduleEntity[] {
        return data.map(this.toPendingEntity)
    }

    static toPendingEntity(data: ISchedulePendingDBReflection): ScheduleEntity {
        const entity = new ScheduleEntity()
        entity.setUuid(data.uuid)
        entity.setContractAt(data.contractAt)

        const user = new UserEntity()
        user.setEmail(data.user.email)
        entity.setUser(user)

        const organization = new OrganizationEntity()
        organization.setUuid(data.organization.uuid)
        organization.setSocialName(data.organization.social_name)
        
        entity.setOrganization(organization)

        return entity
    }
}