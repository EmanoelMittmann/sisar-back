import { Inject, Injectable } from '@nestjs/common';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { BaseService } from 'src/shared/contracts';
import { CreateScheduleDto } from '../dtos/create-schedule.dto';
import { ScheduleEntity } from '../entities/schedule.entity';
import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';

@Injectable()
export class CreateScheduleService
  implements BaseService<CreateScheduleDto, void>
{
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
  ) {}

  async execute(data: CreateScheduleDto): Promise<void> {
    const entity = new ScheduleEntity();

    const service = new ServiceEntity();
    service.setUuid(data.service_id);

    const user = new UserEntity();
    user.setUuid(data.user_id);

    entity.setContractAt(data.contract_date);
    entity.setRememberUser(data.remember_user);
    entity.setService(service);
    entity.setUser(user);

    await this.scheduleRepository.create(entity);
  }
}
