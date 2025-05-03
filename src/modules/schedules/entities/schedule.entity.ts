import { StatusSchedules } from "src/shared/enum/status_schedules.enum";

export class ScheduleEntity {
    private _id: number;
    private _uuid: string;
    private _user_id: number;
    private _service_id: number;
    private _status: StatusSchedules;
    private _remember_user: boolean;
    private _created_at: Date;
    private _updated_at: Date;
    private _canceled_at: Date;

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

    getUserId(): number {
        return this._user_id;
    }

    setUserId(value: number): void {
        this._user_id = value;
    }

    getServiceId(): number {
        return this._service_id;
    }

    setServiceId(value: number): void {
        this._service_id = value;
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

    getCanceledAt(): Date {
        return this._canceled_at;
    }

    setCanceledAt(value: Date): void {
        this._canceled_at = value;
    }
}

