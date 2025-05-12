import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import { ScheduleListDto } from '../dtos/schedule-list.dto';
import { UpdateScheduleDto } from '../dtos/update-scedule.dto';
import { ScheduleEntity } from '../entities/schedule.entity';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';

export class ScheduleSerializer {
  static toListMany(schedules: ScheduleEntity[]): ScheduleListDto[] {
    return schedules.map(this.toListOne);
  }

  static toListOne(schedule: ScheduleEntity): ScheduleListDto {
    return {
      uuid: schedule.getUuid(),
      organization: {
        uuid: schedule.getOrganization().getUuid(),
        name: schedule.getOrganization().getSocialName(),
      },
      service: {
        uuid: schedule.getService().getUuid(),
        name: schedule.getService().getName(),
      },
      contractAt: schedule.getContractAt(),
      status: schedule.getStatus(),
    };
  }

  static toEntity(dto: UpdateScheduleDto): ScheduleEntity {
    const { id, service_id, user_id, contract_date, remember_user } = dto;

    const entity = new ScheduleEntity();
    entity.setUuid(id);
    entity.setContractAt(contract_date);
    entity.setRememberUser(remember_user);

    const service = new ServiceEntity();
    service.setUuid(service_id);

    const user = new UserEntity();
    user.setUuid(user_id);

    entity.setService(service);
    entity.setUser(user);
    return entity;
  }
}
