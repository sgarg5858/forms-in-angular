import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forms-in-angular';

  userForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    age:new FormControl({value:24,disabled:false},[Validators.required,Validators.min(18),Validators.max(60)]),
    address: new FormControl({house:'#233',street:"Jawahar Nagar",city:"Bathinda",state:"Punjab",pincode:151201},[Validators.required])
  })

  ngOnInit(): void {
      
  }

  log()
  {
    console.log(this.userForm);
  }
}
