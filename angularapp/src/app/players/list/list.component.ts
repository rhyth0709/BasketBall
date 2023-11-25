import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';
import { PositionsService } from 'src/app/services/positions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  players:Player[] = []
  constructor(private ps:PlayersService,private pos:PositionsService) { }

  ngOnInit(): void {

    this.ps.getPlayers().subscribe((data)=>{
      this.players.push(...data)
    })
  }

}
