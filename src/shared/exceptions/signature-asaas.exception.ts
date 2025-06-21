export class SignatureAsaasException extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 400,
    public readonly errorCode: string = 'SIGNATURE_ASAAS_ERROR',
  ) {
    super(message);
    this.name = 'SignatureAsaasException';
    Object.setPrototypeOf(this, SignatureAsaasException.prototype);
  }
}
