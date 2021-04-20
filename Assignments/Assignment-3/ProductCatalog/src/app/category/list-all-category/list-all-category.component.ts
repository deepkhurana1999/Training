import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { ICategory } from '../ICategory';

@Component({
  selector: 'app-list-all-category',
  templateUrl: './list-all-category.component.html',
  styleUrls: ['./list-all-category.component.css']
})
export class ListAllCategoryComponent implements OnInit {
  categoryList: ICategory[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Short Code', 'Description'];
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.categoryList = this.dataService.GetCategoryList();
  }

}
