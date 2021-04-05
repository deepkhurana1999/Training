import { Component, DoCheck, OnInit } from '@angular/core';
import { IProduct } from '../products/IProduct';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private dataService: ShareDataService) { }
  
  data: IProduct;
  ngOnInit(): void {
    this.dataService.product$.subscribe((c)=>{this.data = c});
  }
  
  
}

