import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlaceComponent } from './place/place.component';


@NgModule({
  declarations: [
    PlaceComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }
