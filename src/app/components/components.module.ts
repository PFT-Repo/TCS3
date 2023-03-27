import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../dataJson';
import { MainserviceService } from '../services/mainservice.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
  infos: Data[] = [];
  @Input() data!:Data;

  constructor ( private mainservice : MainserviceService) {
    this.infos = this.mainservice.getinfos();
  }
 }
