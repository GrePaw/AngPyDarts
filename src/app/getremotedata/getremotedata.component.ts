import { Component, OnInit } from '@angular/core';
import { Playerdataservice } from '../app.service';
import { Playerdata } from '../playersinfo/playerdata.module';


@Component({
  selector: 'app-getremotedata',
  templateUrl: './getremotedata.component.html',
  styleUrls: ['./getremotedata.component.css']
})
export class GetremotedataComponent implements OnInit {

  errorMessage: string = '';
  allNames: string[] = [];
  

  constructor(private playerdataservice: Playerdataservice) { }

  allplayerslist: Playerdata[] = [];

  ngOnInit(): void {
    
    this.playerdataservice.getPlayerdata().subscribe({
      next: playerdata => {
        this.allplayerslist = playerdata;
        this.allNames = this.showavailabledata(this.allplayerslist)
      },
      error: err => this.errorMessage = err
    });
  };

  showavailabledata(availabledata:Playerdata[]):any{
    // Loop through the list of objects and extract the first attribute of each object

    const result: any[] = [];
    
    
    for (let i = 0; i < availabledata.length; i++) {
      const firstAttribute = availabledata[i].playername;
      console.log(firstAttribute);
      result.push(firstAttribute);

    return result
  }
}

 
}
