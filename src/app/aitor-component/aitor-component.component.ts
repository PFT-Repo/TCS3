import { Component } from '@angular/core';
import earthquakes from '../../assets/data.json'

@Component({
  selector: 'app-aitor-component',
  templateUrl: './aitor-component.component.html'
})
export class AitorComponentComponent {
  earthquakes = earthquakes;

  constructor() {
    //console.log(earthquakes);
    
  }
}
