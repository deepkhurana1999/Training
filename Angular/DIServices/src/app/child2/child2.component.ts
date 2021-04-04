import { Component, OnInit } from '@angular/core';
import { Logv1Service } from '../logv1.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  messageReceived: string = '';
  constructor(private logDataService: Logv1Service) { 
  }

  ngOnInit(): void {
    this.messageReceived = this.logDataService.logData("This is child 2");
  }

}