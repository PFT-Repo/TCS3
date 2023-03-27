import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-miguel-earthquake-card',
  templateUrl: './miguel-earthquake-card.component.html',
  styleUrls: ['./miguel-earthquake-card.component.scss']
})
export class MiguelEarthquakeCardComponent {

  @Input() earthquakeInfo: any;
}
