import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms-in-angular';

  userForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    age:new FormControl(24)
  })
}
