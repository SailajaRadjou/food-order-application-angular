import { Food } from "./food";

export class CartItem{
    food: Food;

    constructor(food: Food){
        this.food = food;
        this.price;
    }
    quantity: number = 1;
    get price(): number{
        return this.food.price * this.quantity;
    }
}