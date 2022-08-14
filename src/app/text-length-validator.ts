import { AbstractControl, ValidationErrors } from "@angular/forms";

export function minLength5(control:AbstractControl): ValidationErrors | null{

    let value:string = control.value;
    console.log(value,value.length)
    if(value.length <5)
    {
        return {minLength:{actualLength:value.length,requiredLength:5}}
    }
    return null;

}