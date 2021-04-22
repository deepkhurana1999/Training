import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../../data-service.service';
import { ICategory } from '../ICategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: ICategory;
  categoryForm: FormGroup;
  constructor(private dataService: DataServiceService){
    this.category= {
      ID : Number.NaN,
      Name:'',
      Description:'',
      ShortCode: ''
    };
    this.categoryForm = new FormGroup({});
  }
  ngOnInit(): void {
    this.category = {
      ID : 0,
      Name: '',
      Description: '',
      ShortCode: ''
    };
    this.categoryForm = new FormGroup({
      ID: new FormControl(this.category.ID, [Validators.required]),
      Name: new FormControl(this.category.Name, [Validators.required]),
      Description: new FormControl(this.category.Description, [Validators.required]),
      ShortCode: new FormControl(this.category.ShortCode,[Validators.required])
    });
  }

  AddData()
  {
    
    this.dataService.AddCategory(this.categoryForm?.value);
  }
}
