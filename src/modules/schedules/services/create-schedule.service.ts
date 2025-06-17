import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { IScheduleRepository } from '../repositories/schedules.repository';
import { BaseService } from 'src/shared/contracts';
import {
  CreateScheduleDto,
  CreateScheduleServiceDto,
} from '../dtos/create-schedule.dto';
import { ScheduleEntity } from '../entities/schedule.entity';
import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import Redis from 'ioredis';
import { REMEMBER_USER_KEY } from 'src/shared/keys/remember-user.key';
import { SCHEDULE_USER_KEY } from 'src/shared/keys/schedule-user.key';
import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';

@Injectable()
export class CreateScheduleService
  implements BaseService<CreateScheduleServiceDto, void>
{
  private readonly logger = new Logger(
    `MAIN-${CreateScheduleService.name.toUpperCase()}`,
  );
  constructor(
    @Inject('IScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository,
    @Inject('RedisClient')
    private readonly redis_client: Redis,
  ) {}

  async execute(data: CreateScheduleServiceDto): Promise<void> {
    try {
      const consult = await this.scheduleRepository.findOrganizationByService(
        data.service_id,
      );

      if (!consult) {
        this.logger.error(
          `Organization not found for service_id: ${data.service_id}`,
        );
        throw new InternalServerErrorException(
          `Organization not found for service_id: ${data.service_id}`,
        );
      }
      const entity = new ScheduleEntity();

      const service = new ServiceEntity();
      service.setId(consult.service_id);

      const user = new UserEntity();
      user.setId(data.user_id);

      const organization = new OrganizationEntity();
      organization.setId(consult.organization_id);

      entity.setContractAt(data.contract_date);
      entity.setRememberUser(data.remember_user);
      entity.setService(service);
      entity.setUser(user);
      entity.setOrganization(organization);

      await this.scheduleRepository.create(entity);
      if (data.remember_user) {
        await this.redis_client.lpush(REMEMBER_USER_KEY, data.user_id);
        await this.redis_client.set(
          SCHEDULE_USER_KEY(data.user_uuid),
          entity.getContractAt().toISOString(),
        );
      }
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error);
    }
  }
}
