import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-shirt-data-binding',
  templateUrl: './t-shirt-data-binding.component.html',
  styleUrls: ['./t-shirt-data-binding.component.css']
})
export class TShirtDataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  width = 250;
  height = 500;
  // errorVariable : any = undefined;
  imgSource = '../assets/front.jpg';
  
  changeTshirtMouseEnter(): void{
    this.imgSource = '../assets/back.jpg';
  }
  changeTshirtMouseExit(): void{
    this.imgSource = '../assets/front.jpg';
  }

  // GenerateError(): void{
  //   this.errorVariable.sort();
  // }
}
