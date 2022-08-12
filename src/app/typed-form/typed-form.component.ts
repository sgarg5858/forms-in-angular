import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  styleUrls: ['./typed-form.component.scss']
})
export class TypedFormComponent implements OnInit {

  constructor() { }

  party = new FormGroup({
    address: new FormGroup({
      houseNumber : new FormControl(1234,[Validators.required]),
      street: new FormControl('Powell st',[Validators.required,Validators.minLength(5)])
    }),
    formal:new FormControl(false),
    foodOptions: new FormArray([])
  })

  ngOnInit(): void {

    const place = this.party.controls.address.controls.houseNumber.value;
  }
  

}
