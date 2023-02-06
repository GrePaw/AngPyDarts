import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageclassicgameComponent } from './landingpageclassicgame/landingpageclassicgame.component';
import { ExitpageComponent } from './exitpage/exitpage.component';
import { PlayersinfoComponent } from './playersinfo/playersinfo.component';

const routes: Routes = [
  {path: '', redirectTo: '/landingpageclassicgame', pathMatch: 'full' },
  {path: 'landingpageclassicgame', component: LandingpageclassicgameComponent},
  
  {path: 'exitpage', component: ExitpageComponent},
  {path: 'playersinfo', component: PlayersinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
