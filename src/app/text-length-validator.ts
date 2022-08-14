import { AbstractControl, ValidationErrors } from "@angular/forms";
import { delay, Observable, of, take } from "rxjs";

export function minLength(len:number){

    return (control:AbstractControl) : Observable<ValidationErrors|null>  => {

        let value:string = control.value;
        console.log(value,value.length)
        if(value.length <5)
        {
            return of({minLength:{actualLength:value.length,requiredLength:len}}).pipe(delay(5000),take(1))
        }
        return of(null).pipe(delay(5000),take(1));
    }
}