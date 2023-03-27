import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { MainpipePipe } from "./pipes/mainpipe.pipe";
import { ChristianNoticiasComponent } from "./christian-noticias/christian-noticias.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, MainpipePipe, ChristianNoticiasComponent],
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
