import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { Cache } from "cache-manager";
import { EmailService } from "src/infrastructure/warn-emails/warn.service";
import { IScheduleRepository } from "src/modules/schedules/repositories/schedules.repository";
import { ORGANIZATION_NOTIFICATION_KEY } from "src/shared/keys/notifications.key";


@Injectable()
export class SchedulerService {
    private readonly logger = new Logger(SchedulerService.name)
    constructor(
        @Inject(CACHE_MANAGER)
        private readonly redis_client: Cache,
        @Inject('IScheduleRepository')
        private readonly scheduleRepository: IScheduleRepository,
        private readonly emailService: EmailService
    ) { }

    @Cron('* * * * *')
    async startProcess() {
        this.logger.log("INIT PROCESS OF VERIFICATION OF NOTIFICATIONS ADVANCE")
        const schedules = await this.scheduleRepository.findSchedulesPending()
        if (!schedules.length) {
            this.logger.log("NO FOUND SCHEDULES")
            return
        }
        const organization_uuids = schedules.map(schedule => schedule.getOrganization().getUuid())
        const organization_uuids_unique = [...new Set(organization_uuids)]

        for (const organization_uuid of organization_uuids_unique) {
            const exist = await this.redis_client.get(ORGANIZATION_NOTIFICATION_KEY(organization_uuid))
            if (!exist) {
                this.logger.log(`NO NOTIFICATIONS FOUND FOR ORGANIZATION ${organization_uuid}`)
                const find_clients_by_organization = schedules.filter((item) => item.getOrganization().getUuid() == organization_uuid).map(item => item.getUser().getUuid())
                if (!find_clients_by_organization.length) {
                    this.logger.log("THIS ORGANIZATION HAS NO CLIENTS")
                    continue
                }
                const find_clients_by_organization_unique = { clients: [...new Set(find_clients_by_organization)] }
                await this.redis_client.set(ORGANIZATION_NOTIFICATION_KEY(organization_uuid), JSON.stringify(find_clients_by_organization_unique))
            }

            const clients = JSON.parse(exist as string) as { clients: string[] }

            for (const client_uuid of clients.clients) {
                const find_client_by_uuid = schedules.filter((item) => item.getUser().getUuid() == client_uuid)

                await this.emailService.sendEmail({
                    to: find_client_by_uuid[0].getUser().getEmail(),
                    subject: "Aviso de Agendamento",
                    template: "contract-warning",
                    context: {
                        name: find_client_by_uuid[0].getUser().getName(),
                        contract_date: find_client_by_uuid[0].getContractAt()
                    }
                })
            }
        }
    }
}