import { Component, OnInit} from '@angular/core';
import { Comment } from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService} from '../services/dish.service';


@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})

export class DishDetailsComponent implements OnInit {

	dish: Dish;

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location){ }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
