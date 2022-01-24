import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SecondComponentComponent } from './second-component/second-component.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { DemoComponent } from './demo/demo.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    // SecondComponentComponent,
    RegistrationComponent,
    EmployeeDetailsComponent,
    // DemoComponent,
   
 
    
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
