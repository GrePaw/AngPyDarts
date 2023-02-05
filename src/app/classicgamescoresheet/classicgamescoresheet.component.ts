import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classicgamescoresheet',
  templateUrl: './classicgamescoresheet.component.html',
  styleUrls: ['./classicgamescoresheet.component.css']
})


export class ClassicgamescoresheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

};



export class Player {
  Name: string;
  CurrentValue: number;
  Order: number;
  CurrentAverage: number;
  PreviousThrow: number;
  LastGameAverage: number;
  LongTimeAverage: number;

  constructor(Name: string, CurrentValue: number, Order: number, CurrentAverage: number, PreviousThrow: number, LastGameAverage: number, LongTimeAverage: number) {
    this.Name = Name;
    this.CurrentValue = CurrentValue;
    this.Order = Order;
    this.CurrentAverage = CurrentAverage;
    this.PreviousThrow = PreviousThrow;
    this.LastGameAverage = LastGameAverage;
    this.LongTimeAverage = LongTimeAverage;
  }
};

export class Playerslist {
  Players: void;

  constructor(Players: void) {
    this.Players = Players
  }
}

