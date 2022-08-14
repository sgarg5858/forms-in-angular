import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { CustomAddressFormComponent } from './custom-address-form/custom-address-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DisableControlDirective } from './disable-control.directive';

@NgModule({
  declarations: [
    AppComponent,
    TypedFormComponent,
    CounterComponent,
    CustomAddressFormComponent,
    SignUpComponent,
    DisableControlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
