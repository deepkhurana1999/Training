import { Component, Inject, OnInit } from '@angular/core';
import { IAPIDetail } from '../APIConfig';
import { API } from '../APIValue';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  apiV: any;
  constructor(private logData: LogService,@Inject(API) apiValue: IAPIDetail) { 
    this.apiV = apiValue;
  }

  ngOnInit(): void {
  }

}
