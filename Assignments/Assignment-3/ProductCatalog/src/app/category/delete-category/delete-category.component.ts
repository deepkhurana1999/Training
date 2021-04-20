import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { ICategory } from '../ICategory';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }
  categoryList: ICategory[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Short Code', 'Description'];
  idValue?:number;
  enableBtn:boolean = true;
  deleteBy: boolean = true;
  shortCode:string = '';
  
  ngOnInit(): void {
    this.dataService.category$.subscribe((p)=> this.categoryList=p);
    this.categoryList = [];
  }

  
  RemoveLocalList()
  {
    this.categoryList = [];
    this.enableBtn = true;   
    this.shortCode = '';
    this.idValue = undefined;
  }

  DeleteData()
  {
    this.dataService.DeleteCategory(this.categoryList);
    this.categoryList = [];
    this.enableBtn = true;
  }
  FilterList()
  {
    this.categoryList = this.dataService.GetCategoryList();
    let generatedList;
    if(this.deleteBy)
    {
      generatedList = this.categoryList.filter(x=> x.ID == this.idValue);   
    }
    else
    {
      generatedList = this.categoryList.filter(x=> x.ShortCode.toLowerCase().match(this.shortCode.toLowerCase()));
    }

    this.categoryList = generatedList;
    if((this.idValue ==null && this.deleteBy) || (this.shortCode =='' && !this.deleteBy))
      this.categoryList = [];   
    // console.log(this.categoryList);

    if(this.categoryList.length>0)
      this.enableBtn = false;
    else
      this.enableBtn = true;
    
  }

}
