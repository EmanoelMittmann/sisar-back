
export interface ScheduleListDto {
    uuid: string
    organization: {
        uuid: string
        name: string
    }
    service: {
        uuid: string
        name: string
    }
    contractAt: Date
    status: string
}