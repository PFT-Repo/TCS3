import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainpipePipe } from './pipes/mainpipe.pipe';
import { CardJoseComponent } from './card-jose/card-jose.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpipePipe,
    CardJoseComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
