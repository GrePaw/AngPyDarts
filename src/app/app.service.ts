import { Injectable } from "@angular/core";
import { Playerdata } from "./playersinfo/playerdata.module";

@Injectable({
    providedIn: 'root'
})
export class Playerdataservice {

    getPlayerdata():Playerdata[] {
        return [
            {
                "playername": "Exampleplayer1",
                "activeP": false,
                "attendedGames": 1,
                "curav": 0,
                "curval": 0,
                "lastav": 12,
                "longav": 20,
                "numberThrows": 0,
                "prevthrow": 0,
            },
            {
                "playername": "Exampleplayer2",
                "activeP": false,
                "attendedGames": 1,
                "curav": 0,
                "curval": 0,
                "lastav": 14,
                "longav": 18,
                "numberThrows": 0,
                "prevthrow": 0,
            }

        ]
    }

}