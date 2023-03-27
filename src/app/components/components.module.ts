import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiguelEarthquakesPageComponent } from './miguel-earthquakes-page/miguel-earthquakes-page.component';
import { MiguelEarthquakeCardComponent } from './miguel-earthquake-card/miguel-earthquake-card.component';



@NgModule({
  declarations: [
    MiguelEarthquakesPageComponent,
    MiguelEarthquakeCardComponent
  ],
  exports:[
    MiguelEarthquakeCardComponent,
    MiguelEarthquakesPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
