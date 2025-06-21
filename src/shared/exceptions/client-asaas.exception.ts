export class ClientAsaasException extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 400,
    public readonly errorCode: string = 'CLIENT_ASAAS_ERROR',
  ) {
    super(message);
    this.name = 'ClientAsaasException';
    Object.setPrototypeOf(this, ClientAsaasException.prototype);
  }
}
