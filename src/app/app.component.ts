import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'boom';
  message:string;
  name:string;
  clicked:boolean = false;
  products:IProduct[] = [
    {
     "productId": 1,
     "productName": "test",
     "price": 22
    }
  ];

  ngOnInit():void {
    console.log('initialise');
  }

  onclick() :void {
    this.message = 'You typed ' + this.name +  ' & clicked';
    this.clicked = true;
  }
}

export interface IProduct {
  productId: number;
  productName: string;
  price: number;
}
