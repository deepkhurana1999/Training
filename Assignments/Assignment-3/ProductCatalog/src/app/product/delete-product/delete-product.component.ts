import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  productList: IProduct[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Short Code', 'Manufacturer', 'Categories','Selling Price','Description'];
  idValue?:number;
  enableBtn:boolean = true;
  deleteBy: boolean = true;
  shortCode:string = '';
  
  ngOnInit(): void {
    this.dataService.product$.subscribe((p)=> this.productList=p);
    this.productList = [];
  }

  
  RemoveLocalList()
  {
    this.productList = [];
    this.enableBtn = true;   
    this.shortCode = '';
    this.idValue = undefined;
  }

  DeleteData()
  {
    this.dataService.DeleteProduct(this.productList);
    this.productList = [];
    this.enableBtn = true;
  }
  FilterList()
  {
    this.productList = this.dataService.GetProductList();
    let generatedList;
    if(this.deleteBy)
    {
      generatedList = this.productList.filter(x=> x.ID == this.idValue);   
    }
    else
    {
      generatedList = this.productList.filter(x=> x.ShortCode.toLowerCase().match(this.shortCode.toLowerCase()));
    }

    this.productList = generatedList;
    if((this.idValue ==null && this.deleteBy) || (this.shortCode =='' && !this.deleteBy))
      this.productList = [];   
    // console.log(this.productList);

    if(this.productList.length>0)
      this.enableBtn = false;
    else
      this.enableBtn = true;
    
  }


}
