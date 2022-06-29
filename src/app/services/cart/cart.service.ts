import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { Food } from 'src/app/models/food';
import { CartItem } from 'src/app/models/CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
   }

   removeFromCart(foodId: number): void{
      this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
   }

   changeQuantity(quantity: number, foodId: number){
      let cartItem = this.cart.items.find(item => item.food.id === foodId);
      if(!cartItem)
          return;
      cartItem.quantity = quantity;    
   }

   getCart(): Cart{
    return this.cart;
   }

}
