import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/dishDetails';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish;

  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

}
