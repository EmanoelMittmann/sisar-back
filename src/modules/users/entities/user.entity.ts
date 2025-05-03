import { Role_Control } from 'src/shared/enum/role.enum';

export class UserEntity {
  private _id: number;
  private _uuid: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _phone: string;
  private _cpf: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _role: Role_Control;

  public getEmail(): string {
    return this._email;
  }

  public setEmail(value: string) {
    this._email = value;
  }

  public getPassword(): string {
    return this._password;
  }

  public setPassword(value: string) {
    this._password = value;
  }

  public getPhone(): string {
    return this._phone;
  }

  public setPhone(value: string) {
    this._phone = value;
  }

  public getId(): number {
    return this._id;
  }

  public setId(value: number) {
    this._id = value;
  }

  public getUuid(): string {
    return this._uuid;
  }

  public setUuid(value: string) {
    this._uuid = value;
  }

  public getName(): string {
    return this._name;
  }

  public setName(value: string) {
    this._name = value;
  }

  public getCreatedAt(): Date {
    return this._createdAt;
  }

  public setCreatedAt(value: Date) {
    this._createdAt = value;
  }

  public getUpdatedAt(): Date {
    return this._updatedAt;
  }

  public setUpdatedAt(value: Date) {
    this._updatedAt = value;
  }

  public getRole(): Role_Control {
    return this._role;
  }

  public setRole(value: Role_Control) {
    this._role = value;
  }

  public getCpf(): string {
    return this._cpf;
  }

  public setCpf(value: string) {
    this._cpf = value;
  }
}
