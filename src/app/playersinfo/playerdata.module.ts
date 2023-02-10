export class Playerdata {
    playername:string;
    curval:number;
    curav:number;
    prevthrow:number;
    lastav:number;
    longav:number;
    activeP:boolean;
    numberThrows:number;
    attendedGames:number;


  
    constructor(pn:string, curv:number, cura:number, pret:number, laav:number, loav:number,aP:boolean,nT:number, attG:number ){
      this.playername = pn;
      this.curval = curv;
      this.curav =cura;
      this.prevthrow = pret;
      this.lastav = laav,
      this.longav = loav;
      this.activeP = aP;
      this.numberThrows = nT;
      this.attendedGames = attG;
    }


}

