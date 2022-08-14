import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlStatus, FormGroup, Validators } from '@angular/forms';
import { minLength } from '../text-length-validator';

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.scss']
})
export class TypedFormComponent implements OnInit {

  constructor() { }

  party = new FormGroup({
    address: new FormGroup({
      houseNumber : new FormControl("1234",{validators:[Validators.required],asyncValidators:[minLength(5)]}),
      street: new FormControl('Powell st',[Validators.required,Validators.minLength(5)])
    }),
    formal:new FormControl(false),
    foodOptions: new FormArray<FormGroup<{name:FormControl,veg:FormControl}>>([])
  },{updateOn:'blur'})

  addFoodItem()
  {
    this.party.controls.foodOptions.push(
      new FormGroup({
        name:new FormControl('',[Validators.required]),
        veg:new FormControl(false)
      })
    )
  }
  get foodOptions()
  {
    return this.party.controls.foodOptions.controls;
  }

  removeFoodItem(index:number)
  {
    this.party.controls.foodOptions.removeAt(index);
  }
  ngOnInit(): void {

    this.party.valueChanges.subscribe((value)=>{
      console.log("VALUE",value)
    });
    this.party.statusChanges.subscribe((status:FormControlStatus)=>{
      console.log("Status",status)
    })

  }

  log()
  {
    console.log(this.party.controls.address.controls.houseNumber,this.party.status)
  }
  

}
