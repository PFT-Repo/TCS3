
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChristianNoticiasComponent } from "./christian-noticias/christian-noticias.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainpipePipe } from './pipes/mainpipe.pipe';
import { CardJoseComponent } from './card-jose/card-jose.component';

import { HttpClientModule } from "@angular/common/http";
import { AitorComponentComponent } from './aitor-component/aitor-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpipePipe,
    CardJoseComponent,
   ChristianNoticiasComponent,AitorComponentComponent],

  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
