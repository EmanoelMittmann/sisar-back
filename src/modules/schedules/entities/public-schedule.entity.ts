import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { ServiceEntity } from 'src/modules/services/entities/service.entity';
import { StatusSchedules } from 'src/shared/enum/status_schedules.enum';

export class PublicScheduleEntity {
  private _id: number;
  private _uuid: string;
  private _service: ServiceEntity;
  private _organization: OrganizationEntity;
  private _contract_at: Date;
  private _status: StatusSchedules;
  private _remember_user: boolean;
  private _created_at: Date;
  private _updated_at: Date;

  getOrganization(): OrganizationEntity {
    return this._organization;
  }

  setOrganization(value: OrganizationEntity): void {
    this._organization = value;
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

  getService(): ServiceEntity {
    return this._service;
  }

  setService(value: ServiceEntity): void {
    this._service = value;
  }

  getStatus(): StatusSchedules {
    return this._status;
  }

  setStatus(value: StatusSchedules): void {
    this._status = value;
  }

  getRememberUser(): boolean {
    return this._remember_user;
  }

  setRememberUser(value: boolean): void {
    this._remember_user = value;
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

  getContractAt(): Date {
    return this._contract_at;
  }

  setContractAt(value: Date): void {
    this._contract_at = value;
  }
}
