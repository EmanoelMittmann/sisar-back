export interface ScheduleListDto {
  uuid: string;
  organization: {
    uuid: string;
    name: string;
  };
  service: {
    uuid: string;
    name: string;
    price: number;
  };
  contractAt: Date;
  status: string;
}
