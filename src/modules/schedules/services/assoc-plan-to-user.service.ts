import { Inject, Injectable, Logger } from '@nestjs/common';
import { ICustomerAsaasRepository } from 'src/infrastructure/postgres/repositories/customer_asaas.repository';
import { ISignatureAsaasRepository } from 'src/infrastructure/postgres/repositories/signature_asaas.repository';
import { IPlanRepository } from 'src/modules/plans/repositories/plan.repository';
import { BaseService } from 'src/shared/contracts';
import { IAbstractGatewayRepository } from 'src/shared/contracts/gateway-abstract.contract';
import { BillingType } from 'src/shared/enum/billing-type.enum';
import { CycleEnum } from 'src/shared/enum/cycle.enum';

interface ICreatePlan {
  user_id: string;
  billing_type: BillingType;
  cycle: CycleEnum;
  nextDueDate: Date;
  value: number; // Example value, should be dynamic based on the plan
}

@Injectable()
export class AssocPlanToUserService
  implements BaseService<{ plan_id: string; user_id: string }, void>
{
  private logger = new Logger(AssocPlanToUserService.name);
  constructor(
    @Inject('IPlanRepository')
    private readonly planRepository: IPlanRepository,
    @Inject('IAbstractGatewayRepository')
    private readonly gatewayRepository: IAbstractGatewayRepository,
    @Inject('ICustomerAsaasRepository')
    private readonly customerRepository: ICustomerAsaasRepository,
  ) {}

  async execute(args: { plan_id: string; user_id: string }): Promise<void> {
    try {
      const data = await this.planRepository.assocUserToPlan(
        args.user_id,
        args.plan_id,
      );

      await this.createPlanAsaas({
        billing_type: BillingType.CREDIT_CARD,
        cycle: data.recurrent,
        nextDueDate: data.dueDate,
        user_id: args.user_id,
        value: data.price,
      });
    } catch (error) {
      this.logger.error(
        `Error associating plan ${args.plan_id} to user ${args.user_id}: ${error}`,
      );
    }
  }

  private async createPlanAsaas({
    billing_type,
    cycle,
    nextDueDate,
    user_id,
    value,
  }: ICreatePlan) {
    try {
      const user = await this.customerRepository.findByUserId(user_id);

      if (!user) return;

      await this.gatewayRepository.create_signature({
        customer_uuid: user,
        billing_type,
        cycle,
        nextDueDate,
        value,
      });
    } catch (error) {
      this.logger.error(
        `Error creating plan in Asaas for user ${user_id}: ${error}`,
      );
    }
  }
}
