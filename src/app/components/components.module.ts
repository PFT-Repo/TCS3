import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../dataJson';
import { MainserviceService } from '../services/mainservice.service';
import { ListadaniComponent } from './listadani/listadani.component';
import { CartadaniComponent } from './cartadani/cartadani.component';




@NgModule({
  declarations: [
    ListadaniComponent,
    CartadaniComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    ListadaniComponent,
    CartadaniComponent
  ]
})
export class ComponentsModule {
  infos: Data[] = [];
  @Input() data!:Data;

  constructor ( private mainservice : MainserviceService) {
    this.infos = this.mainservice.getinfos();
  }
 }
