import { AfterViewInit, ChangeDetectorRef, Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective implements AfterViewInit {

  //Gives access to form control via DI
  constructor(private ngControl:NgControl,private changeDetection:ChangeDetectorRef) { }

  condition:boolean=false;

  @Input() set disableControl(condition:boolean)
  {
    this.condition=condition;
    if(condition && this.ngControl.control)
    {
      this.ngControl.control?.disable();
    }
    else{
      this.ngControl.control?.enable();
    }
  }
  ngAfterViewInit(): void {
    if(this.ngControl.control && this.condition)
    {
      this.ngControl.control?.disable();
    }
    else{
      this.ngControl.control?.enable();
    }
    this.changeDetection.detectChanges();
  }

}
