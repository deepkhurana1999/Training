import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { ICategory } from '../ICategory';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {

  
  constructor(private dataService: DataServiceService) { }
  categoryList: ICategory[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Short Code', 'Description'];
  idValue:number = 0;
  enableBtn:boolean = true;
  searchBy: boolean = true;
  shortCode:string = '';
  name:string = '';
  ngOnInit(): void {
    this.dataService.category$.subscribe((p)=> this.categoryList=p);
    this.categoryList = [];
  }

  
  RemoveLocalList()
  {
    this.categoryList = [];
    this.enableBtn = true;   
    this.shortCode = '';
    this.idValue = 0;
  }

  IDValidate()
  {
    if(this.idValue < 0)
      this.idValue = 0;
  }
  FilterList()
  {
    
    this.categoryList = this.dataService.GetCategoryList();
    let generatedList;
    if(this.searchBy)
    {
      generatedList = this.categoryList.filter(x=> x.ID == this.idValue);   
    }
    else
    {
      generatedList = this.categoryList.filter(x=> x.ShortCode.toLowerCase().match(this.shortCode.toLowerCase()));
    }

    if(generatedList.length==0 && ((this.idValue ==null && this.searchBy) || (this.shortCode =='' && !this.searchBy)))
      generatedList = this.categoryList;

    generatedList = generatedList.filter(x=> x.Name.toLowerCase().match(this.name.toLowerCase()));
    
    // console.log(generatedList);
    this.categoryList = generatedList;
    if(((this.idValue ==null && this.searchBy) || (this.shortCode =='' && !this.searchBy)) && this.name == '')
      this.categoryList = [];   

      // console.log(this.categoryList);
    if(this.categoryList.length>0)
      this.enableBtn = false;
    else
      this.enableBtn = true;
    
  }

}
