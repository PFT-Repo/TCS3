import { Component } from '@angular/core';
import * as data from "../../../assets/data.json";



@Component({
  selector: 'app-miguel-earthquakes-page',
  templateUrl: './miguel-earthquakes-page.component.html',
  styleUrls: ['./miguel-earthquakes-page.component.scss']
})
export class MiguelEarthquakesPageComponent {


  earthquakesInfo: any = (data as any).default;

  constructor() {
    console.log(this.earthquakesInfo)
  }

}
