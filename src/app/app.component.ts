import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String;
  mrks:number;

  myHandler(str){
    console.log(str)
  }
}
