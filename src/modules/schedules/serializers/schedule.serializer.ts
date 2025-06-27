import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import { ScheduleListDto } from '../dtos/schedule-list.dto';
import {
  UpdateScheduleDto,
  UpdateScheduleServiceDto,
} from '../dtos/update-scedule.dto';
import { ScheduleEntity } from '../entities/schedule.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { PublicScheduleEntity } from '../entities/public-schedule.entity';
import { DetailsScheduleDto } from '../dtos/details-schedule.dto';

export class ScheduleSerializer {
  static toListMany(
    schedules: ScheduleEntity[] | PublicScheduleEntity[],
  ): ScheduleListDto[] {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return schedules.map(this.toListOne);
  }

  static toDetails(
    schedule: ScheduleEntity | PublicScheduleEntity,
  ): DetailsScheduleDto {
    if (schedule instanceof PublicScheduleEntity) {
      return {
        uuid: schedule.getUuid(),
        contract_date: schedule.getContractAt(),
        status: schedule.getStatus(),
        service: {
          name: schedule.getService().getName(),
          price: schedule.getService().getPrice().toString(),
          duration: schedule.getService().getDuration(),
        },
        user: null,
      };
    }
    return {
      uuid: schedule.getUuid(),
      contract_date: schedule.getContractAt(),
      status: schedule.getStatus(),
      service: {
        name: schedule.getService().getName(),
        price: schedule.getService().getPrice().toString(),
        duration: schedule.getService().getDuration(),
      },
      user: {
        name: schedule.getUser().getName(),
        email: schedule.getUser().getEmail(),
        phone: schedule.getUser().getPhone(),
        cpf: schedule.getUser().getCpf(),
      },
    };
  }

  static toListOne(
    schedule: ScheduleEntity | PublicScheduleEntity,
  ): ScheduleListDto {
    if (schedule instanceof PublicScheduleEntity) {
      return {
        uuid: schedule.getUuid(),
        organization: {
          uuid: schedule.getOrganization().getUuid(),
          name: schedule.getOrganization().getSocialName(),
        },
        service: {
          uuid: schedule.getService().getUuid(),
          name: schedule.getService().getName(),
          price: schedule.getService().getPrice(),
        },
        user: null,
        contractAt: schedule.getContractAt(),
        status: schedule.getStatus(),
      };
    }
    return {
      uuid: schedule.getUuid(),
      organization: {
        uuid: schedule.getOrganization().getUuid(),
        name: schedule.getOrganization().getSocialName(),
      },
      service: {
        uuid: schedule.getService().getUuid(),
        name: schedule.getService().getName(),
        price: schedule.getService().getPrice(),
      },
      user: {
        name: schedule?.getUser()?.getName() || null,
      },
      contractAt: schedule.getContractAt(),
      status: schedule.getStatus(),
    };
  }

  static toEntity(dto: UpdateScheduleServiceDto): ScheduleEntity {
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
