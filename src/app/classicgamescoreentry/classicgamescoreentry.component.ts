import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Playerdata } from '../playersinfo/playerdata.module';

@Component({
  selector: 'app-classicgamescoreentry',
  templateUrl: './classicgamescoreentry.component.html',
  styleUrls: ['./classicgamescoreentry.component.css']
})
export class ClassicgamescoreentryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() listofplayers : any;
  @Input() activeplayernumber!:number;

  @Output() throwcomplete: EventEmitter<any> = 
  new EventEmitter<any>();
  
  addScore(score: any, objectlist:Playerdata[]) {
    this.addEntry(score, objectlist)
  }



  addEntry(entryval:number,  objectlist:Playerdata[]) {
      
    objectlist[this.activeplayernumber].curval = objectlist[this.activeplayernumber].curval - entryval;
    objectlist[this.activeplayernumber].numberThrows = objectlist[this.activeplayernumber].numberThrows + 3;
    objectlist[this.activeplayernumber].curav = Math.trunc((301-objectlist[this.activeplayernumber].curval) /objectlist[this.activeplayernumber].numberThrows);
    objectlist[this.activeplayernumber].prevthrow = entryval;

    this.activeplayernumber = this.activeplayernumber +1;

    if (this.activeplayernumber > (objectlist.length -1)){
      this.activeplayernumber = 0
    }
    this.throwcomplete.emit(this.activeplayernumber)
   }

  skipPlayer(objectlist:Playerdata[]){
    objectlist[this.activeplayernumber].numberThrows = objectlist[this.activeplayernumber].numberThrows + 3;
    this.activeplayernumber = this.activeplayernumber +1;

    if (this.activeplayernumber > (objectlist.length -1)){
      this.activeplayernumber = 0
    }
    this.throwcomplete.emit(this.activeplayernumber)
   }
}
