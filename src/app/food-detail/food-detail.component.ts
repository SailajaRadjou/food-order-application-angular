import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../models/food';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css','../home/home.component.css']
})
export class FoodDetailComponent implements OnInit {

  food!: Food;
  id: number;
  constructor(private activateRoute: ActivatedRoute,
     private foodService: FoodService, 
     private cartService: CartService,
     private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.id = (params['id']);
      if(this.id){
       this.food = this.foodService.getFoodById(this.id);
      }
      console.log(this.food);
      
    })
  }
  addToCart(){
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart');
  }
}
