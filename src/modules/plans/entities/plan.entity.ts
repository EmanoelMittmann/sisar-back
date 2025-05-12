import { OrganizationEntity } from 'src/modules/organization/entities/organization.entity';
import { Recurrent } from 'src/shared/enum/recurrent.enum';

export class PlanEntity {
  private _id: number;
  private _uuid: string;
  private _name: string;
  private _price: number;
  private _recurrent: Recurrent;
  private _description: string;
  private _dueDate: Date;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _organization: OrganizationEntity;

  // Getters
  getId(): number {
    return this._id;
  }

  getUuid(): string {
    return this._uuid;
  }

  getName(): string {
    return this._name;
  }

  getPrice(): number {
    return this._price;
  }

  getRecurrent(): Recurrent {
    return this._recurrent;
  }

  getDescription(): string {
    return this._description;
  }

  getDueDate(): Date {
    return this._dueDate;
  }

  getCreatedAt(): Date {
    return this._createdAt;
  }

  getUpdatedAt(): Date {
    return this._updatedAt;
  }

  getOrganization(): OrganizationEntity {
    return this._organization;
  }

  // Setters
  setId(value: number): void {
    this._id = value;
  }

  setUuid(value: string): void {
    this._uuid = value;
  }

  setName(value: string): void {
    this._name = value;
  }

  setPrice(value: number): void {
    this._price = value;
  }

  setRecurrent(value: Recurrent): void {
    this._recurrent = value;
  }

  setDescription(value: string): void {
    this._description = value;
  }

  setDueDate(value: Date): void {
    this._dueDate = value;
  }

  setCreatedAt(value: Date): void {
    this._createdAt = value;
  }

  setUpdatedAt(value: Date): void {
    this._updatedAt = value;
  }

  setOrganization(value: OrganizationEntity): void {
    this._organization = value;
  }
}
