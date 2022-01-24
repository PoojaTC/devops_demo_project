import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { DemoComponent } from './demo/demo.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {path:'',component:RegistrationComponent},
   {path:'registerPage',component:RegistrationComponent},
   {path:'DetailsPage/:id',component:EmployeeDetailsComponent},
  {path:'firstPage',component:FirstComponentComponent},
// {path:'',component:DemoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
