import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Component({
  selector: 'app-listproductwithmat',
  templateUrl: './listproductwithmat.component.html',
  styleUrls: ['./listproductwithmat.component.css']
})
export class ListproductwithmatComponent implements OnInit {

  productList: Product[] =[];
  @Input() products: Observable<Product[]>;
  displayedColumns: string[] = ['id', 'title', 'price', 'quantity','inStock','expiryDate'];
  constructor() {
    this.products = new Observable<Product[]>();
  }
  ngOnInit(): void {
    this.products.subscribe(data=>this.productList=data);
  }

}
