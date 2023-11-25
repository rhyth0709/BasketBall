import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { Position } from '../models/position';
@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  constructor(private httpclient : HttpClient){ }

  public apiURL = "https://8080-abfbbcbcacd307818054dccbfcadeone.premiumproject.examly.io/api";

  httpOptions = { headers:new HttpHeaders({
    'Content-type':'application/json'
  })}

  getPositions():Observable<Position[]>{
    return this.httpclient.get<Position[]>(this.apiURL+'/positions')
  }
}
