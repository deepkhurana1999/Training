import { Component, DoCheck, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private dataService: ShareDataService) { }
  
  data: number;
  ngOnInit(): void {
  }
  setData(): void
  {
    this.dataService.setPrice(this.data);
  }
  
}
