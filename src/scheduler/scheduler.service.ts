import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { isAfter, isBefore, toDate } from 'date-fns';
import Redis from 'ioredis';
import { EmailService } from 'src/infrastructure/warn-emails/warn.service';
import { TODAY } from 'src/shared/contants/today';
import { isBetweenTimeTable } from 'src/shared/helpers/is-between-time-table';
import { REMEMBER_USER_KEY } from 'src/shared/keys/remember-user.key';
import { SCHEDULE_USER_KEY } from 'src/shared/keys/schedule-user.key';
import { USER_MAIL_KEY } from 'src/shared/keys/user-mail.key';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(`WORKER-${SchedulerService.name}`);
  constructor(
    @Inject('RedisClient')
    private readonly redis_client: Redis,
    private readonly email_service: EmailService,
  ) {}

  @Cron('* * * * *')
  async notify_clients() {
    this.logger.log('INIT PROCESS OF NOTIFY CLIENTS');
    const USER_NOTIFY_LIST_KEY = REMEMBER_USER_KEY;
    const USER_NOTIFY_LIST = await this.redis_client.lrange(
      USER_NOTIFY_LIST_KEY,
      0,
      -1,
    );

    if (!USER_NOTIFY_LIST || !USER_NOTIFY_LIST.length) {
      this.logger.log('NO USERS TO NOTIFY');
      return;
    }

    this.logger.log(`FOUND ${USER_NOTIFY_LIST.length} USERS TO NOTIFY`);

    const users_uuids_array = USER_NOTIFY_LIST;

    for (const user_uuid of users_uuids_array) {
      const schedule_key = SCHEDULE_USER_KEY(user_uuid);
      const contract_at = await this.redis_client.get(
        schedule_key,
        (error, result) => {
          if (error || !result) {
            this.logger.error(error);
            return;
          }
          return result;
        },
      );

      if (!contract_at) {
        this.logger.log(`NO CONTRACT AT FOUND FOR USER ${user_uuid}`);
        await this.redis_client.del(schedule_key);
        return;
      }

      const contractDate = new Date(contract_at);
      const today = new Date();

      const isSameDay =
        contractDate.getFullYear() === today.getFullYear() &&
        contractDate.getMonth() === today.getMonth() &&
        contractDate.getDate() === today.getDate();

      if (isSameDay) {
        const mail_key = USER_MAIL_KEY(user_uuid);
        const mail = await this.redis_client.get(mail_key, (error, result) => {
          if (error) {
            this.logger.error(error);
            return;
          }
          return result;
        });

        if (!mail) {
          this.logger.log(`NO MAIL FOUND FOR USER ${user_uuid}`);
          continue;
        }
        this.logger.log(`SENDING EMAIL FOR USER ${user_uuid}`);

        //@TODO move publish in queue to send email
        await this.email_service.sendEmail({
          to: mail,
          subject: 'Aviso de Agendamento',
          template: 'warn-schedule',
          context: {
            email: mail,
          },
        });

        this.logger.log(`EMAIL SENT TO ${mail} FOR USER ${user_uuid}`);

        await this.redis_client.lrem(USER_NOTIFY_LIST_KEY, 1, user_uuid);
      }
    }
  }
}
