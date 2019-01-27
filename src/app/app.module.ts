/** MODULES */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/** ROUTINGS */
import { AppRouting } from './app.routing';

/** COMPONENTS */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component'
import { RestaurantComponent } from './components/restaurants/restaurant/restaurant.component'
import { RestaurantDetailsComponent } from './components/restaurants/restaurant-details/restaurant-details.component';

/** SERVICES */
import { RestaurantsService } from './services/restaurants.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRouting
  ],
  providers: [ RestaurantsService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
