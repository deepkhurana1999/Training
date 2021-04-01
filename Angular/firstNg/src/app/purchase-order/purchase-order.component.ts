import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IPurchaseItem } from '../purchase/IPurchaseItem';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit, OnChanges  {

  @Input() orderDetails : IPurchaseItem;
  @Input() showDetail: boolean;
  
  Price = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log(this.orderDetails);
    this.orderDetails.Items.forEach(element => {
      this.Price = this.Price + element.Price;
    });
  }
  
}
