import { Recurrent } from "src/shared/enum/recurrent.enum";


export class CreatePlansDto {
    name: string;
    price: number;
    recurrent: Recurrent;
    description: string;
    dueDate: Date;
}