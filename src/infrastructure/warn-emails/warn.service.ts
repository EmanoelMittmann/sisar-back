import { ISendMailOptions, MailerService } from "@nestjs-modules/mailer";
import { Injectable, Logger } from "@nestjs/common";


@Injectable()
export class EmailService {
    private logger = new Logger(EmailService.name)
    constructor(private readonly mailerService: MailerService) { }

    async sendEmail(args: {
        to: string,
        subject: string,
        template: string,
        context: ISendMailOptions['context']
    }) {
        try {

            if (!args.to) {
                throw new Error('SMTP_USER is not set')
            }

            const MAIL_PARAMS = {
                to: args.to,
                from: process.env.SMTP_FROM,
                subject: args.subject,
                template: args.template,
                context: args.context
            }

            const response = await this.mailerService.sendMail(MAIL_PARAMS)

            this.logger.log(`Email sent to ${args.to}`)
        } catch (error) {
            this.logger.error(`Failed to send email to ${args.to}`, error)
            throw new Error('Failed to send email')
        }
    }

}