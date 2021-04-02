import { Injectable } from '@angular/core';
import { IProduct } from './products/IProduct';
import { IPurchaseItem } from './purchase/IPurchaseItem';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
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
  getPurchasedList():IPurchaseItem[] {
    return[
      {
        PurchaseID : 1,
        PurchaseName : 'Microsoft',
        PurchaseDate : '05-25-2021',
        VendorName : 'PizzaHut',
        Items : [{
          ID : 1,
          Title :'Veg. Pizza',
          Price : 100,
          Quantity : 200,
          InStock : true,
          ExpiryDate : '10-09-2021'
        },
        {
          ID : 2,
          Title :'Cheeze Pizza',
          Price : 200,
          Quantity : 500,
          InStock : true,
          ExpiryDate : '10-10-2021'
        }]
      },
      {
        PurchaseID : 2,
        PurchaseName : 'Taazaa',
        PurchaseDate : '05-20-2021',
        VendorName : 'Domminos',
        Items : [{
          ID : 1,
          Title :'Double Cheeze Pizza',
          Price : 100,
          Quantity : 200,
          InStock : true,
          ExpiryDate : '10-09-2021'
        },
        {
          ID : 2,
          Title :'Veg. Paradise Pizza',
          Price : 200,
          Quantity : 500,
          InStock : true,
          ExpiryDate : '10-10-2021'
        }]
      }
    ];
  }
}
