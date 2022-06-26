import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {
        id: 1,        
        name: 'Hamburger',
        price: 20,
        cookTime: ' 10-15 mins ',
        favorite: false,
        origins: [' Germany ', ' US '],
        star: 3.5,
        imageUrl:'/assets/image1.jpg',
        tags: [' Fast Food ', ' Hamburger ']       
      },
      {
        id: 2,        
        name: 'Cheesy Pizza',
        price: 30,
        cookTime: ' 15-20 mins ',
        favorite: true,
        origins: [' Italy ', ' US '],
        star: 4.5,
        imageUrl:'/assets/image2.jpg',
        tags: [' Fast Food ', ' Pizza ']       
      },
      {
        id: 3,        
        name: 'Lasangne',
        price: 50,
        cookTime: ' 30-40 mins ',
        favorite: false,
        origins: [' Italy ', ' France '],
        star: 4.0,
        imageUrl:'/assets/image3.jpg',
        tags: [' Fast Food ', ' Lasange ']       
      },
      {
        id: 4,        
        name: 'Mini Spiral Beef Tarts',
        price: 50,
        cookTime: ' 20-30 mins ',
        favorite: true,
        origins: [' Germany ', ' Spain ', ' Persia '],
        star: 3.0,
        imageUrl:'/assets/image4.jpg',
        tags: [' Fast Food ', ' Tarts ']       
      },
      {
        id: 5,        
        name: ' Four Cheese Pasta ',
        price: 65,
        cookTime: ' 10-15 mins ',
        favorite: true,
        origins: [' Italy ', ' France '],
        star: 4.5,
        imageUrl:'/assets/image5.jpg',
        tags: [' Fast Food ', ' Pasta ']       
      },
      {
        id: 6,        
        name: 'Roasted Chicken',
        price: 80,
        cookTime: ' 20-25 mins ',
        favorite: false,
        origins: [' Spain ', ' Denmark ', ' London '],
        star: 4.0,
        imageUrl:'/assets/image6.jpg',
        tags: [' Fast Food ', ' Chicken ']       
      },
      {
        id: 7,        
        name: 'Korean Fried Chicken',
        price: 85,
        cookTime: ' 20-30 mins ',
        favorite: true,
        origins: [' Korean ', ' Asia '],
        star: 4.5,
        imageUrl:'/assets/image7.jpg',
        tags: [' Fast Food ', ' Fried ', ' Chicken ']       
      },
      {
        id: 8,        
        name: 'Crunchy Fries',
        price: 55,
        cookTime: ' 10-15 mins ',
        favorite: false,
        origins: [' Germany ', ' US  '],
        star: 3.0,
        imageUrl:'/assets/image8.jpg',
        tags: [' Fast Food ', ' Crunchy ']       
      },
      {
        id: 9,        
        name: 'Firecracker Chicken',
        price: 40,
        cookTime: ' 10-15 mins ',
        favorite: false,
        origins: [' China ', ' US '],
        star: 3.5,
        imageUrl:'/assets/image9.jpg',
        tags: [' Fast Food ', ' Chicken ']       
      },
      {
        id: 10,        
        name: 'Mini Rolls Juicy Cream',
        price: 85,
        cookTime: ' 20-25 mins ',
        favorite: true,
        origins: [' China ', ' Korean '],
        star: 4.5,
        imageUrl:'/assets/image10.jpg',
        tags: [' Fast Food ', ' Rolls ']       
      },
      {
        id: 11,        
        name: 'Vietnamese Fried Beef Rolls',
        price: 75,
        cookTime: ' 10-15 mins ',
        favorite: true,
        origins: [' Vietnam ', ' Philliphine '],
        star: 4.5,
        imageUrl:'/assets/image11.jpg',
        tags: [' Fast Food ', ' Beef ']       
      },
      {
        id: 12,        
        name: 'Spaghetti Meatballs',
        price: 65,
        cookTime: ' 10-15 mins ',
        favorite: false,
        origins: [' Italy ', ' France ', ' Germany '],
        star: 5.0,
        imageUrl:'/assets/image12.jpg',
        tags: [' Fast Food ', ' Spaghetti ']       
      },
      {
        id: 13,        
        name: 'Chicken Taco Pizza',
        price: 85,
        cookTime: ' 15-25 mins ',
        favorite: true,
        origins: [' Italy ', ' France ', ' Germany '],
        star: 4.5,
        imageUrl:'/assets/image13.jpg',
        tags: [' Fast Food ', ' Taco ', ' Pizza ']       
      },
      {
        id: 14,        
        name: 'Homemade Vegetable Pizza',
        price: 75,
        cookTime: ' 15-20 mins ',
        favorite: false,
        origins: [' Italy ', ' France ', ' Germany '],
        star: 4.0,
        imageUrl:'/assets/image14.jpg',
        tags: [' Fast Food ', ' Pizza ']       
      },
      {
        id: 15,        
        name: 'Penne Pasta Basilic',
        price: 55,
        cookTime: ' 10-15 mins ',
        favorite: true,
        origins: [' Italy ', ' France ', ' Germany '],
        star: 5.0,
        imageUrl:'/assets/image15.jpg',
        tags: [' Fast Food ', ' Penne ',' Pasta ']       
      }      
      
    ];
  }


}
