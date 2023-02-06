import { Component, Input, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Playerdata } from './playerdata.module';

@Component({
  selector: 'app-playersinfo',
  templateUrl: './playersinfo.component.html',
  styleUrls: ['./playersinfo.component.css']
})
export class PlayersinfoComponent {
  currentvalue="";
  counter:number = 0;
  playernames:string[]=[];
  playernames2:Playerdata[]=[];
  alldonevariable:Boolean = false;
  

  getVal(val: string) {
    this.currentvalue = val
    this.playernames = this.playernames.concat(val)
    this.playernames2[this.counter] = new Playerdata(val,301,0 ,0 ,0 ,0 )
    this.counter = this.counter +1
  }

  allDone(){
    this.alldonevariable = true
  }

}




