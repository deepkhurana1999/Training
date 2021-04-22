import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  productList: IProduct[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Short Code', 'Manufacturer', 'Categories','Selling Price','Description'];
  idValue:number=0;
  enableBtn:boolean = true;
  searchBy: boolean = true;
  shortCode:string = '';
  name:string = '';
  ngOnInit(): void {
    this.dataService.product$.subscribe((p)=> this.productList=p);
    this.productList = [];
  }

  IDValidate()
  {
    if(this.idValue < 0)
      this.idValue = 0;
  }
  
  RemoveLocalList()
  {
    this.productList = [];
    this.enableBtn = true;   
    this.shortCode = '';
    this.idValue = 0;
  }

  
  FilterList()
  {    this.productList = this.dataService.GetProductList();
    let generatedList;
    if(this.searchBy)
    {
      generatedList = this.productList.filter(x=> x.ID == this.idValue);   
    }
    else
    {
      generatedList = this.productList.filter(x=> x.ShortCode.toLowerCase().match(this.shortCode.toLowerCase()));
    }

    if(generatedList.length==0 && ((this.idValue ==null && this.searchBy) || (this.shortCode =='' && !this.searchBy)))
      generatedList = this.productList;

    generatedList = generatedList.filter(x=> x.Name.toLowerCase().match(this.name.toLowerCase()));
    
    // console.log(generatedList);
    this.productList = generatedList;
    if(((this.idValue ==null && this.searchBy) || (this.shortCode =='' && !this.searchBy)) && this.name == '')
      this.productList = [];   

      // console.log(this.productList);
    if(this.productList.length>0)
      this.enableBtn = false;
    else
      this.enableBtn = true;
    
  }

}
