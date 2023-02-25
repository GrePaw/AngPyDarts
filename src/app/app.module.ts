import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageclassicgameComponent } from './landingpageclassicgame/landingpageclassicgame.component';

import { ExitpageComponent } from './exitpage/exitpage.component';
import { PlayersinfoComponent } from './playersinfo/playersinfo.component';
import { ClassicgamescoresComponent } from './classicgamescores/classicgamescores.component';
import { ClassicgamescoreentryComponent } from './classicgamescoreentry/classicgamescoreentry.component';
import { HttpClientModule} from '@angular/common/http';
import { GetremotedataComponent } from './getremotedata/getremotedata.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageclassicgameComponent,
    ExitpageComponent,
    PlayersinfoComponent,
    ClassicgamescoresComponent,
    ClassicgamescoreentryComponent,
    GetremotedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
