import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageclassicgameComponent } from './landingpageclassicgame/landingpageclassicgame.component';
import { ClassicgamescoresheetComponent } from './classicgamescoresheet/classicgamescoresheet.component';

const routes: Routes = [
  {path: '', redirectTo: '/landingpageclassicgame', pathMatch: 'full' },
  {path: 'landingpageclassicgame', component: LandingpageclassicgameComponent},
  {path: 'classicgamescoresheet', component: ClassicgamescoresheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
