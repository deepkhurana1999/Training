import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-list-all-product',
  templateUrl: './list-all-product.component.html',
  styleUrls: ['./list-all-product.component.css']
})
export class ListAllProductComponent implements OnInit {

  productList: IProduct[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Short Code', 'Manufacturer', 'Categories','Selling Price','Description'];
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.productList = this.dataService.GetProductList();
  }

}
