import { Component } from '@angular/core';
import json from '../../../assets/data.json'
import { iCartaDaniel } from '../interfacesdaniel/iCartaDaniel';
@Component({
  selector: 'app-listadani',
  templateUrl: './listadani.component.html',
  styleUrls: ['./listadani.component.scss']
})
export class ListadaniComponent {

  data = <iCartaDaniel[]> json;

}
