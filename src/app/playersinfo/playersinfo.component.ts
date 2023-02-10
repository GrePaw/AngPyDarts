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

  addScore(score: any, objectlist:Playerdata[]) {
    this.addEntry(score, objectlist)
  }

  allDone(){
    this.alldonevariable = true
  }

  addEntry(entryval:number,  objectlist:Playerdata[]) {
      
    objectlist[this.activePnumber].curval = objectlist[this.activePnumber].curval - entryval;
    objectlist[this.activePnumber].numberThrows = objectlist[this.activePnumber].numberThrows + 3;
    objectlist[this.activePnumber].curav = Math.trunc((301-objectlist[this.activePnumber].curval) /objectlist[this.activePnumber].numberThrows);
    objectlist[this.activePnumber].prevthrow = entryval;

    this.activePnumber = this.activePnumber +1;

    if (this.activePnumber > (objectlist.length -1)){
      this.activePnumber = 0
    }
   }

  skipPlayer(objectlist:Playerdata[]){
    objectlist[this.activePnumber].numberThrows = objectlist[this.activePnumber].numberThrows + 3;
    this.activePnumber = this.activePnumber +1;

    if (this.activePnumber > (objectlist.length -1)){
      this.activePnumber = 0
    }
   }
}




