import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageclassicgameComponent } from './landingpageclassicgame/landingpageclassicgame.component';
import { ClassicgamescoresheetComponent } from './classicgamescoresheet/classicgamescoresheet.component';
import { ExitpageComponent } from './exitpage/exitpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageclassicgameComponent,
    ClassicgamescoresheetComponent,
    ExitpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
