import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageclassicgameComponent } from './landingpageclassicgame/landingpageclassicgame.component';

import { ExitpageComponent } from './exitpage/exitpage.component';
import { PlayersinfoComponent } from './playersinfo/playersinfo.component';
import { ClassicgamescoresComponent } from './classicgamescores/classicgamescores.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageclassicgameComponent,
    
    ExitpageComponent,
    PlayersinfoComponent,
    ClassicgamescoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
