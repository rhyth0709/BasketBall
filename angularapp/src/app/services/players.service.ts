import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpclient : HttpClient){ }

  public apiURL = "https://8080-abfbbcbcacd307818054dccbfcadeone.premiumproject.examly.io/api/";

  getPlayers():Observable<Player[]>{
    return this.httpclient.get<Player[]>(this.apiURL+'/Players')
  }
  getPlayer(id:number):Observable<Player>{
    return this.httpclient.get<Player>(this.apiURL+'/Players/'+)
  }
  createPlayer(player:Player):Observable<Player[]>{
    return this.httpclient.get<Player[]>(this.apiURL+'/Players')
  }
  updatePlayer(id:number,player:Player):Observable<Player[]>{
    return this.httpclient.get<Player[]>(this.apiURL+'/Players')
  }
  deletePlayer(id:number):Observable<Player[]>{
    return this.httpclient.get<Player[]>(this.apiURL+'/Players')
  }


}
