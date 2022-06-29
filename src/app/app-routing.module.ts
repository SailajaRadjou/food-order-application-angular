import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'search/:searchItem', component: HomeComponent},
  {path:'tag/:tag', component: HomeComponent},
  {path:'food/:id', component: FoodDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
