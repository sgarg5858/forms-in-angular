import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      multi:true,
      useExisting:CounterComponent
    },
    {
      provide:NG_VALIDATORS,
      multi:true,
      useExisting:CounterComponent
    }
  ]
})
export class CounterComponent implements OnInit,ControlValueAccessor,Validator {

  @Input() change:number=1;
  @Input() minValue:number=0;
  @Input() maxValue:number=100;
  @Input() negAllowed:boolean=false;

  counter:number=0;

  touched:boolean=false;

  disabled:boolean=false;

  constructor() { }


  onChange = (value:number)=>{};

  onTouched = ()=>{}

  //All these 5 methods will be called by angular at run time
  // we should not call these methods!
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched=fn;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    if(control.value<0)
    {
      return {mustBePositive:false}
    }
    return null;

  }

  writeValue(counter: number): void {
    this.counter=counter;
  } 

  setDisabledState(isDisabled:boolean)
  {
    this.disabled=isDisabled;
  }

  ngOnInit(): void {
  }

  increment()
  {
    if(!this.disabled)
    {
      this.markAsTouched();
      this.counter=this.counter + this.change;
      this.onChange(this.counter);
    }
  }

  decrement()
  {
   if(!this.disabled)
   {
    this.markAsTouched();
    if(this.counter-this.change<0)
    {
      return;
    }
    this.counter=this.counter - this.change;
    this.onChange(this.counter);
   }

  }

  markAsTouched()
  {
    console.log("HELLo")
    if(!this.touched)
    {
      this.onTouched();
      this.touched=true;
    }
  }
}
