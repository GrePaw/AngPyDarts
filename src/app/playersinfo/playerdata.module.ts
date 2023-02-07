export class Playerdata {
    playername:string;
    curval:number;
    curav:number;
    prevthrow:number;
    lastav:number;
    longav:number;
    activeP:boolean;


  
    constructor(pn:string, curv:number, cura:number, pret:number, laav:number, loav:number,aP:boolean ){
      this.playername = pn;
      this.curval = curv;
      this.curav =cura;
      this.prevthrow = pret;
      this.lastav = laav,
      this.longav = loav;
      this.activeP = aP;
    }


}

