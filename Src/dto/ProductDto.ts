export class ProductDto {
    name: string;
    description: string;
    price: number;
    inventory: number;
    category_id: number;

    constructor(name: string, description: string, price: number, inventory: number, category_id: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inventory = inventory;
        this.category_id = category_id;
    }
}