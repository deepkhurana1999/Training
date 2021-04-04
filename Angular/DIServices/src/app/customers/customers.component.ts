import { Component, Inject, OnInit } from '@angular/core';
import { IAPIDetail } from '../APIConfig';
import { API } from '../APIValue';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  apiV: any;
  constructor(private logData: LogService,@Inject(API) apiValue: IAPIDetail) { 
    this.apiV = apiValue;
  }

  ngOnInit(): void {
  }

}
