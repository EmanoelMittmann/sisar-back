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
  user: {
    name: string | null;
  } | null;
  contractAt: Date;
  status: string;
}
