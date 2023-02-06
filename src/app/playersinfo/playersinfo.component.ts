import { Component, Input, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-playersinfo',
  templateUrl: './playersinfo.component.html',
  styleUrls: ['./playersinfo.component.css']
})
export class PlayersinfoComponent {
  currentvalue="";
  counter:number = 1;
  playernames:string[]=[];

  getVal(val: string) {
    this.currentvalue = val
    this.playernames = this.playernames.concat(val)
    this.counter = this.counter +1
  }

}


