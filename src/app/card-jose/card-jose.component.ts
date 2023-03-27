import { Component, Input } from '@angular/core';
import { Data } from '../dataJson';
import { MainserviceService } from '../services/mainservice.service';

@Component({
  selector: 'app-card-jose',
  templateUrl: './card-jose.component.html',
  styleUrls: ['./card-jose.component.scss']
})


export class CardJoseComponent {
  infos: Data[] = [];
  @Input() data!:Data;

  constructor ( private mainservice : MainserviceService) {
    this.infos = this.mainservice.getinfos();
  }
 }
