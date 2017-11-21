import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filter: string;

  constructor(){
    this.filter = '';
  }

  search(query){
    this.filter = query;
  }
}
