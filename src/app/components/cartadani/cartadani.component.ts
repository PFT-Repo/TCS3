import { Component, Input } from '@angular/core';
import { iCartaDaniel } from '../interfacesdaniel/iCartaDaniel';

@Component({
  selector: 'app-cartadani',
  templateUrl: './cartadani.component.html',
  styleUrls: ['./cartadani.component.scss']
})
export class CartadaniComponent {
@Input() item!:iCartaDaniel;

}
