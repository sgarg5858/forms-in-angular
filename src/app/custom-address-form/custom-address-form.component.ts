import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-address-form',
  templateUrl: './custom-address-form.component.html',
  styleUrls: ['./custom-address-form.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      multi:true,
      useExisting:CustomAddressFormComponent
    },
    {
      provide:NG_VALIDATORS,
      multi:true,
      useExisting:CustomAddressFormComponent
    }
  ]
})
export class CustomAddressFormComponent implements OnInit,ControlValueAccessor,Validators,OnDestroy {

  constructor() { }

  address= new FormGroup({
    house: new FormControl('',[Validators.required]),
    street: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    pincode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
  })

  onTouched = () =>{};

  onChangeSubs : Subscription[]=[];

  

  setDisabledState(isDisabled:boolean)
  {
    if(isDisabled)
    {
      this.address.disable();
    }
    else{
      this.address.enable();
    }
  }

  writeValue(value: any): void {

    if(value)
    {
      // NOTE: emitEvent:false otherwise it will call onChange
      //as this value is already coming from parent no need to
      // tell parent form about this :) 
      this.address.setValue(value,{emitEvent:false})
    }

  }
  registerOnChange(onChange: any): void {
    const sub = this.address.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched=onTouched;
  }

  validate(control:AbstractControl):ValidationErrors|null{
    
    if (this.address.valid) {
      return null;
    }

    let errors : any = {};
    errors = this.addControlErrors(errors, "house");
    errors = this.addControlErrors(errors, "street");
    errors = this.addControlErrors(errors, "pincode");
    errors = this.addControlErrors(errors, "city");
    errors = this.addControlErrors(errors, "state");
    console.log(errors)
    return errors;

  }
  addControlErrors(allErrors: any, controlName:string) {

    const errors = {...allErrors};

    const controlErrors:any = this.address.get(controlName)?.errors;

    if (controlErrors) {
      errors[controlName] = controlErrors;
    }

    return errors;
  }
  

 

  ngOnInit(): void {
  }
  ngOnDestroy()
  {
    for(let sub of this.onChangeSubs) sub.unsubscribe();
  }

}
