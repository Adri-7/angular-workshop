import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private name:string = 'Antoine';
  
  private sayHello():void {
    alert('Hello');
  }
}