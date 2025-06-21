export class ChargeAsaasException extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 400,
    public readonly errorCode: string = 'CHARGE_ASAAS_ERROR',
  ) {
    super(message);
    this.name = 'ChargeAsaasException';
    Object.setPrototypeOf(this, ChargeAsaasException.prototype);
  }
}
