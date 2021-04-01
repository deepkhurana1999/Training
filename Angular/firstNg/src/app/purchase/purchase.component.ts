import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { IPurchaseItem } from './IPurchaseItem';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  orderDetails: IPurchaseItem;
  purchaseList: IPurchaseItem[];
  showDetail: boolean = false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    this.purchaseList = this.getPurchasedList();
  }
  purchaseDetail(detail: IPurchaseItem): void{
    this.orderDetails = detail;
    console.log(this.orderDetails);
    this.showDetail = true;
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
