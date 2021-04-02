import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IPurchaseItem } from '../purchase/IPurchaseItem';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  @Input() orderDetails : IPurchaseItem;
  @Input() showDetail: boolean;

  Price = 0;
  constructor() { }

  ngOnInit(): void {
    this.orderDetails.Items.forEach(element => {
      this.Price = this.Price + element.Price * element.Quantity;
    });
  }

  onPriceChanges():void{
    this.Price = 0;
    this.orderDetails.Items.forEach(element => {
      if(element.Price<0 || element.Price == null)
        element.Price = 0;
      if(element.Quantity<0 || element.Quantity == null)
        element.Quantity = 0;
      this.Price = this.Price + element.Price * element.Quantity;
    });
   
  }
 
  
  
}
