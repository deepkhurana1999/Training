import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
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
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.purchaseList = this.dataService.getPurchasedList();
  }
  purchaseDetail(detail: IPurchaseItem): void{
    this.orderDetails = detail;
    console.log(this.orderDetails);
    this.showDetail = true;
  }
  

}
