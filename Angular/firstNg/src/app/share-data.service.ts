import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { IProduct } from './products/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  // constructor() { 
  //   this.count = new BehaviorSubject(this.data);
  // }

 
  // data: string;
  // prevData: string;
  // count: BehaviorSubject<string>;

  // valueChanged(): boolean{
  //   if(this.data == this.prevData)
  //     return false;
  //   else{
  //     this.prevData = this.data;
  //     return true;
  //   }
      
  // }

  productData: IProduct = {
    ID : 1,
    Title :'Veg. Pizza',
    Price : 100,
    Quantity : 200,
    InStock : true,
    ExpiryDate : '10-09-2021'
  };
  product$: BehaviorSubject<IProduct>;
  constructor()
  {
    this.product$ = new BehaviorSubject(this.productData);
  }

  setPrice(price: number)
  {
    this.productData.Price = price;
  }

  setData(data: IProduct)
  {
      this.productData = data;
      this.product$.next(this.productData);
  }

}
