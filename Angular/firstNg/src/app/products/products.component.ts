import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.productList = this.GetProductList();
  }

  productList: IProduct[] = [];

  GetProductList(): IProduct[]
  {
    return [
      {
        ID : 1,
        Title :'Pen',
        Price : 100,
        Quantity : 200,
        InStock : true,
        ExpiryDate : '10-09-2021'
      },
      {
        ID : 2,
        Title :'Pencil',
        Price : 200,
        Quantity : 500,
        InStock : true,
        ExpiryDate : '10-10-2021'
      },
      {
        ID : 3,
        Title :'Bat',
        Price : 1500,
        Quantity : 300,
        InStock : true,
        ExpiryDate : '08-21-2021'
      },
      {
        ID : 4,
        Title :'Ball',
        Price : 2100,
        Quantity : 800,
        InStock : false,
        ExpiryDate : '09-10-2021'
      },
      {
        ID : 5,
        Title :'Bottle',
        Price : 3200,
        Quantity : 100,
        InStock : false,
        ExpiryDate : '09-19-2021'
      }
    ]
  }
}
