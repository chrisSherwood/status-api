import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BOOM it works!';
  message:string;
  name:string;
  clicked:boolean = false;

  onclick() {
    this.message = 'You typed ' + this.name +  ' & clicked';
    this.clicked = true;
  }
}
