import { Recurrent } from 'src/shared/enum/recurrent.enum';

export class CreatePlansDto {
  name: string;
  price: number;
  quantityInstallments: number;
  description: string;
  dueDate: Date;
}
