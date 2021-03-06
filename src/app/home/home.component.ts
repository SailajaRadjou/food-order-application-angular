import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { FoodService } from '../services/food/food.service';
import { Food } from '../models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem']) {
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      } 
      else if(params['tag']){
        this.foods = this.foodService.getAllFoodByTag(params['tag']);
      }     
      else {
        this.foods = this.foodService.getAll();
      }
      
    })
    
    
  }

}
function elseif(arg0: any) {
  throw new Error('Function not implemented.');
}

