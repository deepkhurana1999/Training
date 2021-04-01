import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';
  showDataBinding = true;
  showDirective = false;
  showOrder = false;
  DataBindingDemo(): void{
    this.showDataBinding = true;
    this.showDirective = false;
    this.showOrder = false;
  }

  ShowDirectiveDemo(): void{
    this.showDataBinding = false;
    this.showDirective = true;
    this.showOrder = false;
  }

  ShowPurchaseOrder(): void{
    this.showOrder = true;
    this.showDataBinding = false;
    this.showDirective = false;
  }
}
