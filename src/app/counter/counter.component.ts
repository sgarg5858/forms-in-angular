import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      multi:true,
      useExisting:CounterComponent
    }
  ]
})
export class CounterComponent implements OnInit,ControlValueAccessor {

  @Input() change:number=1;

  counter:number=0;
  touched:boolean=false;
  disabled:boolean=false;

  onChange = (value:number)=>{};
  onTouch = ()=>{}

  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn;
  }

  constructor() { }

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
    this.counter=this.counter - this.change;
    this.onChange(this.counter);
   }

  }

  markAsTouched()
  {
    console.log("HELLo")
    if(!this.touched)
    {
      this.onTouch();
      this.touched=true;
    }
  }

}
