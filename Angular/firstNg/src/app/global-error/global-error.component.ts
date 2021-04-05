import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.css']
})
export class GlobalErrorComponent implements OnInit {

  constructor() { }
  errorVariable : any = undefined;
  ngOnInit(): void {
  }
  GenerateError(): void{
    this.errorVariable.sort();
  }

}
