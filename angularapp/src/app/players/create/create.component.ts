import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models/position';
import { PositionsService } from 'src/app/services/positions.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  positions: Position[]=[]
  createForm : FormGroup
  constructor(private as :PositionsService,private fb:FormBuilder,private ps:PlayersService) {

    this.createForm = this.fb.group({
      shirtno : ['',Validators.required],
      name : ['',Validators.required],
      positionid : ['',Validators.required],
      appearances : ['',Validators.required],
      goals : ['',Validators.required]  
    })

   }

   onSubmit(formData:FormGroup):void{


    if(formData.valid)
    {
      const p = formData.value
      this.ps.createPlayer(p).subscribe(()=>{
        console.log("Added Successfully")
      })
    }


   }

  

  ngOnInit(): void {

    this.as.getPositions().subscribe((data)=>{
      this.positions.push(...data)
    })


   
  }

}
