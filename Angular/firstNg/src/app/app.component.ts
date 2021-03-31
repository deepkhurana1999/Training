import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstNg';
  width = 250;
  height = 500;
  imgSource = '../assets/front.jpg';
  changeTshirtMouseEnter(): void{
    this.imgSource = '../assets/back.jpg';
  }
  changeTshirtMouseExit(): void{
    this.imgSource = '../assets/front.jpg';
  }
}
