import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';

export class ServiceEntity {
  private _id: number;
  private _uuid: string;
  private _name: string;
  private _price: number;
  private _is_active: boolean;
  private _duration: string;
  private _is_quantitative: boolean;
  private _limit_for_day: number;
  private _created_at: Date;
  private _updated_at: Date;
  private _organization: OrganizationEntity;

  getDuration(): string {
    return this._duration;
  }

  setDuration(value: string): void {
    this._duration = value;
  }

  getId(): number {
    return this._id;
  }

  setId(value: number): void {
    this._id = value;
  }

  getUuid(): string {
    return this._uuid;
  }

  setUuid(value: string): void {
    this._uuid = value;
  }

  getName(): string {
    return this._name;
  }

  setName(value: string): void {
    this._name = value;
  }

  getPrice(): number {
    return this._price;
  }

  setPrice(value: number): void {
    this._price = value;
  }

  getIsActive(): boolean {
    return this._is_active;
  }

  setIsActive(value: boolean): void {
    this._is_active = value;
  }

  getIsQuantitative(): boolean {
    return this._is_quantitative;
  }

  setIsQuantitative(value: boolean): void {
    this._is_quantitative = value;
  }

  getLimitForDay(): number {
    return this._limit_for_day;
  }

  setLimitForDay(value: number): void {
    this._limit_for_day = value;
  }

  getOrganization(): OrganizationEntity {
    return this._organization;
  }

  setOrganization(value: OrganizationEntity): void {
    this._organization = value;
  }

  getCreatedAt(): Date {
    return this._created_at;
  }

  setCreatedAt(value: Date): void {
    this._created_at = value;
  }

  getUpdatedAt(): Date {
    return this._updated_at;
  }

  setUpdatedAt(value: Date): void {
    this._updated_at = value;
  }
}
