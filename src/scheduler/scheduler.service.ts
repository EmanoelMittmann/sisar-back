import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import Redis from 'ioredis';
import { EmailService } from 'src/infrastructure/warn-emails/warn.service';
import { REMEMBER_USER_KEY } from 'src/shared/keys/remember-user.key';
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
    const USER_NOTIFY_LIST = await this.redis_client.get(
      USER_NOTIFY_LIST_KEY,
      (error, result) => {
        if (error) {
          this.logger.error(error);
          return;
        }
        return result;
      },
    );

    if (!USER_NOTIFY_LIST || !USER_NOTIFY_LIST.length) {
      this.logger.log('NO USERS TO NOTIFY');
      return;
    }

    this.logger.log(`FOUND ${USER_NOTIFY_LIST.length} USERS TO NOTIFY`);

    const users_uuids_array = JSON.parse(USER_NOTIFY_LIST) as string[];

    for (const user_uuid of users_uuids_array) {
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

      //@TODO move publish in queue to send email
      this.email_service.sendEmail({
        to: mail,
        subject: 'Aviso de Agendamento',
        template: 'warn-schedule',
        context: {
          name: '',
        },
      });
    }
  }
}
