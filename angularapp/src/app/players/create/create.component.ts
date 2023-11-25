import { Component, OnInit } from '@angular/core';
import { PositionsService } from 'src/app/services/positions.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private as :PositionsService) { }

  ngOnInit(): void {
  }

}
