import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  constructor(private cartService: CartService) { 
    
  }

  ngOnInit(): void {
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, qty: string){
    const quantity = parseInt(qty);
    console.log(quantity);
    
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
