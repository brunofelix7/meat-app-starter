import { Component, OnInit } from '@angular/core';
import { Restaurant } from "app/models/restaurant.model";
import { RestaurantsService } from "app/services/restaurants.service";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private service: RestaurantsService) {

  }

  ngOnInit() {
    this.service.list().subscribe(data => this.restaurants = data);
  }

}
