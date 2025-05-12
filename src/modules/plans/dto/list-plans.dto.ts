import { Recurrent } from 'src/shared/enum/recurrent.enum';

export class ListPlansDto {
  uuid: string;
  name: string;
  price: number;
  recurrent: Recurrent;
  description: string;
  dueDate: Date;
}
