import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';

import { FristServiceService } from './frist-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-FristApp';
// result:any=[];

constructor(private user:FristServiceService){
//  debugger;
//   this.user.getData().subscribe(data=>{
//    console.warn("data",data);
 
// this.result=data;

//   })
  
}



}