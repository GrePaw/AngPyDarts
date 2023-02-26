import { Component, OnInit } from '@angular/core';
import { Playerdataservice } from '../app.service';
import { Playerdata } from '../playersinfo/playerdata.module';


@Component({
  selector: 'app-getremotedata',
  templateUrl: './getremotedata.component.html',
  styleUrls: ['./getremotedata.component.css']
})
export class GetremotedataComponent implements OnInit {
  

  constructor(private playerdataservice: Playerdataservice) { }

  allplayerslist: Playerdata[] = [];

  ngOnInit(): void {
    this.allplayerslist = this.playerdataservice.getPlayerdata();
  }

 
}
