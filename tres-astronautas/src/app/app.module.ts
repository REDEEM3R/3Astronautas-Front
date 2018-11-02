import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './modules/control/control.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsComponent } from './modules/planets/planets.component';

import { PlanetasService } from './services/planetas.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
