import { Component, Inject, OnInit } from '@angular/core';
import { IAPIDetail } from '../APIConfig';
import { API } from '../APIValue';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  messageReceived: string = '';
  apiV: any;
  constructor(private logDataService: LogService) { }


  ngOnInit(): void {
    this.messageReceived = this.logDataService.logData("This is child 1");
  }

}