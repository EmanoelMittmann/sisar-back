import { BillingType } from "../enum/billing-type.enum"

export interface IChargeRequiredInput {
    customer_uuid: string
    billing_type: BillingType
    value: number
    dueDate: Date
}