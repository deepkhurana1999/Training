import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from './IProduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  searchTitle: string;
  searchPrice: number;
  showTable: boolean = true;
  ngOnInit(): void {
    this.productList = this.dataService.GetProductList();
  }

  productList: IProduct[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Price', 'Quantity', 'Expiry Date'];
  
  
}
