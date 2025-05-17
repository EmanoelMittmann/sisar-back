import { UserEntity } from 'src/modules/users';

export class OrganizationEntity {
  private _id: number;
  private _uuid: string;
  private _social_name: string;
  private _cnpj: string;
  private _email: string;
  private _phone: string;
  private _image_path: string;
  private _is_active: boolean;
  private _office: string;
  private _created_at: Date;
  private _updated_at: Date;
  private _inactive_at: Date;
  private _user: UserEntity | null;

  getImagePath(): string {
    return this._image_path;
  }

  setImagePath(value: string) {
    this._image_path = value;
  }

  getId(): number {
    return this._id;
  }

  setId(value: number) {
    this._id = value;
  }

  getUuid(): string {
    return this._uuid;
  }

  setUuid(value: string) {
    this._uuid = value;
  }

  getSocialName(): string {
    return this._social_name;
  }

  setSocialName(value: string) {
    this._social_name = value;
  }

  getCnpj(): string {
    return this._cnpj;
  }

  setCnpj(value: string) {
    this._cnpj = value;
  }

  getEmail(): string {
    return this._email;
  }

  setEmail(value: string) {
    this._email = value;
  }

  getPhone(): string {
    return this._phone;
  }

  setPhone(value: string) {
    this._phone = value;
  }

  getIsActive(): boolean {
    return this._is_active;
  }

  setIsActive(value: boolean) {
    this._is_active = value;
  }

  getOffice(): string {
    return this._office;
  }

  setOffice(value: string) {
    this._office = value;
  }

  getCreatedAt(): Date {
    return this._created_at;
  }

  setCreatedAt(value: Date) {
    this._created_at = value;
  }

  getUpdatedAt(): Date {
    return this._updated_at;
  }

  setUpdatedAt(value: Date) {
    this._updated_at = value;
  }

  getInactiveAt(): Date {
    return this._inactive_at;
  }

  setInactiveAt(value: Date) {
    this._inactive_at = value;
  }

  getUser(): UserEntity | null {
    return this._user;
  }
  setUser(value: UserEntity) {
    this._user = value;
  }
}
