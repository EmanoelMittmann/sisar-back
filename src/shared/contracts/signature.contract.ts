import { BillingType } from "../enum/billing-type.enum"
import { CycleEnum } from "../enum/cycle.enum"

export interface ISignatureRequiredInput {
    customer_uuid: string
    billing_type: BillingType
    value: number
    nextDueDate: Date
    cycle: CycleEnum
}