import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product$: Observable<Product[]>;
  constructor(private data:ProductDataService) {
    this.product$ = new Observable<Product[]>();
   }

  ngOnInit(): void {
    this.product$ = this.data.GetAllProducts();
  }

}
