import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playersinfo',
  templateUrl: './playersinfo.component.html',
  styleUrls: ['./playersinfo.component.css']
})
export class PlayersinfoComponent implements OnInit {
  
  value:any;
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  getName(){
    console.log("Name entered is: " + this.value);
  }



}

