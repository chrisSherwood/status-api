import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testing-inputs',
  templateUrl: './testing-inputs.component.html',
  styleUrls: ['./testing-inputs.component.css']
})
export class TestingInputsComponent implements OnInit {

  @Input() passedData:string;

  constructor() { }

  ngOnInit() {
  }

}
