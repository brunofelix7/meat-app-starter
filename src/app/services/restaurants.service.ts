import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Restaurant } from "app/models/restaurant.model";
import { Observable } from "rxjs/observable";
import { ErrorHandler } from "app/handlers/error.handler";
import { API_URL } from "app/api/routes.api";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  list(): Observable<Restaurant[]> {
    return this.http.get(`${API_URL}/restaurants`)
    .map(res => res.json())
    .catch(ErrorHandler.handlerError);
  }

}
