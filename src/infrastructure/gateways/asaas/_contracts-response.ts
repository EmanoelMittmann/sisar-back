export interface IChargeResponse {
  object: string;
  id: string;
  dateCreated: string;
  customer: string;
  subscription: string | null;
  installment: string | null;
  checkoutSession: string | null;
  paymentLink: string | null;
  value: number;
  netValue: number;
  originalValue: number | null;
  interestValue: number | null;
  description: string | null;
  billingType:
    | 'UNDEFINED'
    | 'BOLETO'
    | 'CREDIT_CARD'
    | 'DEBIT_CARD'
    | 'TRANSFER'
    | 'DEPOSIT'
    | 'PIX';
  creditCard: {
    creditCardNumber: string;
    creditCardBrand:
      | 'VISA'
      | 'MASTERCARD'
      | 'ELO'
      | 'DINERS'
      | 'DISCOVER'
      | 'AMEX'
      | 'HIPERCARD'
      | 'CABAL'
      | 'BANESCARD'
      | 'CREDZ'
      | 'SOROCRED'
      | 'CREDSYSTEM'
      | 'JCB'
      | 'UNKNOWN';
    creditCardToken: string | null;
  } | null;
  canBePaidAfterDueDate: boolean;
  pixTransaction: string | null;
  pixQrCodeId: string | null;
  status:
    | 'PENDING'
    | 'RECEIVED'
    | 'CONFIRMED'
    | 'OVERDUE'
    | 'REFUNDED'
    | 'RECEIVED_IN_CASH'
    | 'REFUND_REQUESTED'
    | 'REFUND_IN_PROGRESS'
    | 'CHARGEBACK_REQUESTED'
    | 'CHARGEBACK_DISPUTE'
    | 'AWAITING_CHARGEBACK_REVERSAL'
    | 'DUNNING_REQUESTED'
    | 'DUNNING_RECEIVED'
    | 'AWAITING_RISK_ANALYSIS';
  dueDate: string;
  originalDueDate: string;
  paymentDate: string | null;
  clientPaymentDate: string | null;
  installmentNumber: number | null;
  invoiceUrl: string | null;
  invoiceNumber: string | null;
  externalReference: string | null;
  deleted: boolean;
  anticipated: boolean;
  anticipable: boolean;
  creditDate: string | null;
  estimatedCreditDate: string | null;
  transactionReceiptUrl: string | null;
  nossoNumero: string | null;
  bankSlipUrl: string | null;
  discount: {
    value: number;
    dueDateLimitDays: number;
    type: 'FIXED' | 'PERCENTAGE';
  } | null;
  fine: {
    value: number;
  } | null;
  interest: {
    value: number;
  } | null;
  split: Array<{
    object: string;
    id: string;
    walletId: string;
    fixedValue: number;
    percentualValue: number;
    totalValue: number;
    cancellationReason:
      | 'PAYMENT_DELETED'
      | 'PAYMENT_OVERDUE'
      | 'PAYMENT_RECEIVED_IN_CASH'
      | 'PAYMENT_REFUNDED'
      | 'VALUE_DIVERGENCE_BLOCK'
      | 'WALLET_UNABLE_TO_RECEIVE'
      | null;
    status:
      | 'PENDING'
      | 'AWAITING_CREDIT'
      | 'CANCELLED'
      | 'DONE'
      | 'REFUNDED'
      | 'BLOCKED_BY_VALUE_DIVERGENCE';
    externalReference: string | null;
    description: string | null;
  }>;
  postalService: boolean;
  daysAfterDueDateToRegistrationCancellation: number | null;
  chargeback: {
    id: string;
    payment: string;
    installment: string | null;
    customerAccount: string;
    status: 'REQUESTED' | 'IN_DISPUTE' | 'DISPUTE_LOST' | 'REVERSED' | 'DONE';
    reason:
      | 'ABSENCE_OF_PRINT'
      | 'ABSENT_CARD_FRAUD'
      | 'CARD_ACTIVATED_PHONE_TRANSACTION'
      | 'CARD_FRAUD'
      | 'CARD_RECOVERY_BULLETIN'
      | 'COMMERCIAL_DISAGREEMENT'
      | 'COPY_NOT_RECEIVED'
      | 'CREDIT_OR_DEBIT_PRESENTATION_ERROR'
      | 'DIFFERENT_PAY_METHOD'
      | 'FRAUD'
      | 'INCORRECT_TRANSACTION_VALUE'
      | 'INVALID_CURRENCY'
      | 'INVALID_DATA'
      | 'LATE_PRESENTATION'
      | 'LOCAL_REGULATORY_OR_LEGAL_DISPUTE'
      | 'MULTIPLE_ROCS'
      | 'ORIGINAL_CREDIT_TRANSACTION_NOT_ACCEPTED'
      | 'OTHER_ABSENT_CARD_FRAUD'
      | 'PROCESS_ERROR'
      | 'RECEIVED_COPY_ILLEGIBLE_OR_INCOMPLETE'
      | 'RECURRENCE_CANCELED'
      | 'REQUIRED_AUTHORIZATION_NOT_GRANTED'
      | 'RIGHT_OF_FULL_RECOURSE_FOR_FRAUD'
      | 'SALE_CANCELED'
      | 'SERVICE_DISAGREEMENT_OR_DEFECTIVE_PRODUCT'
      | 'SERVICE_NOT_RECEIVED'
      | 'SPLIT_SALE'
      | 'TRANSFERS_OF_DIVERSE_RESPONSIBILITIES'
      | 'UNQUALIFIED_CAR_RENTAL_DEBIT'
      | 'USA_CARDHOLDER_DISPUTE'
      | 'VISA_FRAUD_MONITORING_PROGRAM'
      | 'WARNING_BULLETIN_FILE';
    disputeStartDate: string;
    value: number;
    paymentDate: string;
    creditCard: {
      creditCardNumber: string;
      creditCardBrand:
        | 'VISA'
        | 'MASTERCARD'
        | 'ELO'
        | 'DINERS'
        | 'DISCOVER'
        | 'AMEX'
        | 'HIPERCARD'
        | 'CABAL'
        | 'BANESCARD'
        | 'CREDZ'
        | 'SOROCRED'
        | 'CREDSYSTEM'
        | 'JCB'
        | 'UNKNOWN';
      creditCardToken: string | null;
    } | null;
    disputeStatus: 'REQUESTED' | 'ACCEPTED' | 'REJECTED';
    deadlineToSendDisputeDocuments: string | null;
  } | null;
  escrow: {
    id: string;
    status: 'ACTIVE' | 'DONE';
    expirationDate: string;
    finishDate: string | null;
    finishReason:
      | 'CHARGEBACK'
      | 'EXPIRED'
      | 'INSUFFICIENT_BALANCE'
      | 'PAYMENT_REFUNDED'
      | 'REQUESTED_BY_CUSTOMER'
      | 'CUSTOMER_CONFIG_DISABLED'
      | null;
  } | null;
  refunds: Array<{
    object: string;
    dateCreated: string;
    status:
      | 'PENDING'
      | 'AWAITING_CRITICAL_ACTION_AUTHORIZATION'
      | 'AWAITING_CUSTOMER_EXTERNAL_AUTHORIZATION'
      | 'CANCELLED'
      | 'DONE';
    value: number;
    endToEndIdentifier: string | null;
    description: string | null;
    effectiveDate: string | null;
    transactionReceiptUrl: string | null;
    refundedSplits: Array<{
      object: string;
      id: string;
      value: number;
      done: boolean;
    }>;
  }>;
}

export interface ICustomerResponse {
  object: string;
  id: string;
  dateCreated: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  mobilePhone: string | null;
  address: string | null;
  addressNumber: string | null;
  complement: string | null;
  province: string | null;
  postalCode: string | null;
  cpfCnpj: string;
  personType: 'FISICA' | 'JURIDICA';
  deleted: boolean;
  additionalEmails: string | null;
  externalReference: string | null;
  notificationDisabled: boolean;
  observations: string | null;
  municipalInscription: string | null;
  stateInscription: string | null;
  canDelete: boolean;
  cannotBeDeletedReason: string | null;
  canEdit: boolean;
  cannotEditReason: string | null;
  city: string | null;
  cityName: string | null;
  state: string | null;
  country: string;
}

export interface ISignatureResponse {
  object: string;
  id: string;
  dateCreated: string;
  customer: string;
  paymentLink: string;
  billingType:
    | 'UNDEFINED'
    | 'BOLETO'
    | 'CREDIT_CARD'
    | 'DEBIT_CARD'
    | 'TRANSFER'
    | 'DEPOSIT'
    | 'PIX';
  cycle:
    | 'WEEKLY'
    | 'BIWEEKLY'
    | 'MONTHLY'
    | 'BIMONTHLY'
    | 'QUARTERLY'
    | 'SEMIANNUALLY'
    | 'YEARLY';
  value: number;
  nextDueDate: string;
  endDate: string;
  description: string;
  status: 'ACTIVE' | 'EXPIRED' | 'INACTIVE';
  discount: {
    value: number;
    dueDateLimitDays: number;
    type: 'FIXED' | 'PERCENTAGE';
  };
  fine: {
    value: number;
  };
  interest: {
    value: number;
  };
  deleted: boolean;
  maxPayments: number;
  externalReference: string;
  checkoutSession: string;
  split: Array<{
    object: string;
    walletId: string;
    fixedValue: number;
    percentualValue: number;
    externalReference: string;
    description: string;
    status: 'ACTIVE' | 'DISABLED';
    disabledReason: 'WALLET_UNABLE_TO_RECEIVE' | 'VALUE_DIVERGENCE';
  }>;
}
