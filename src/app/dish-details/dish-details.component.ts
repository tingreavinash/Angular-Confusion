import { Component, OnInit, Input} from '@angular/core';
import { Comment } from '../shared/comment';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})

export class DishDetailsComponent implements OnInit {

  @Input()
	dish: Dish;


  ngOnInit(): void {
  }

}
