export interface DetailsScheduleDto {
  uuid: string;
  contract_date: Date;
  status: string;
  service: {
    name: string;
    price: string;
    duration: string;
  };
  user: {
    name: string;
    email: string;
    phone: string;
    cpf: string;
  } | null;
}
