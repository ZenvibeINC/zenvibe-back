export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    inventory: number;
    category_id: number;
    creation_date: Date;
}