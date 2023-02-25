import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-classicgamescores',
  templateUrl: './classicgamescores.component.html',
  styleUrls: ['./classicgamescores.component.css']
})
export class ClassicgamescoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() listofplayers2: any;
  @Input()
  counterplayersnumber!: number;
  @Input()
  activeplayernumber!: number;

}
