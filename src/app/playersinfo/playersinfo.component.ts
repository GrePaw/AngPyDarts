import { Component, Input, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Playerdata } from './playerdata.module';

@Component({
  selector: 'app-playersinfo',
  templateUrl: './playersinfo.component.html',
  styleUrls: ['./playersinfo.component.css']
})
export class PlayersinfoComponent {
parseInt(arg0: string): number {
throw new Error('Method not implemented.');
}
  currentvalue="";
  counter:number = 0;
  playernames:string[]=[];
  playernames2:Playerdata[]=[];
  alldonevariable:Boolean = false;
  activePnumber:number =0;
  attendedGamesDB:number = 0;
  

  getVal(val: string) {
    this.currentvalue = val
    this.playernames = this.playernames.concat(val)
    this.playernames2[this.counter] = new Playerdata(val,301,0 ,0 ,0 ,0,false,0,this.attendedGamesDB )
    this.counter = this.counter +1
    console.log(this.counter)
  }
  
  allDone(){
    this.alldonevariable = true
  }

  onThrowcomplete(numb:number): void {
    this.activePnumber = numb
  }
}




