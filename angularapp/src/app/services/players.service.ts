import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpclient : HttpClient){ }

  public apiURL = "https://8080-abfbbcbcacd307818054dccbfcadeone.premiumproject.examly.io/api";

  httpOptions = { headers:new HttpHeaders({
    'Content-type':'application/json'
  })}

  getPlayers():Observable<Player[]>{
    return this.httpclient.get<Player[]>(this.apiURL+'/players')
  }
  getPlayer(id:number):Observable<Player>{
    return this.httpclient.get<Player>(this.apiURL+'Players/'+id)
  }
  createPlayer(player:Player):Observable<Player>{
    return this.httpclient.post<Player>(this.apiURL+'/Players',player,this.httpOptions)
  }
  updatePlayer(id:number,player:Player):Observable<Player>{
    return this.httpclient.put<Player>(this.apiURL+'/Players/'+id,player,this.httpOptions)
  }
  deletePlayer(id:number):Observable<Player[]>{
    return this.httpclient.delete<Player[]>(this.apiURL+'/Players/'+id,this.httpOptions)
  }


}
