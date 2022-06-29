import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../models/food';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food: Food;
  constructor(private activateRoute: ActivatedRoute, private foodService: FoodService) {
      activateRoute.params.subscribe((params) => {
          if(params['id']){
            this.food = foodService.getFoodById(params['id']);
          }
      })
   }

  ngOnInit(): void {
  }

}
