import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class ComponentsModule { }
