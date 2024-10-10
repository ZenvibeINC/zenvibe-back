import { ICartProduct } from "./ICartProduct";


export interface ICart {
    userId: number;
    products: ICartProduct[];
    totalPrice:number;
}