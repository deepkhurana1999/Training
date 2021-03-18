import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  operator = 'op';
  result = 0;
  inputField1 = 0;
  inputField2 = 0;
  width = NaN;
  height = NaN;

  add()
  {
    this.result = this.inputField1 + this.inputField2;
  }
  sub()
  {
    this.result = this.inputField1 - this.inputField2;
  }
  mul()
  {
    this.result = this.inputField1 * this.inputField2;
  }
  div()
  {
    this.result = this.inputField1 / this.inputField2;
  }
  mod()
  {
    this.result = this.inputField1 % this.inputField2;
  }

  clr()
  {
    this.result = 0;
    this.inputField2 = 0;
    this.inputField1 = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
