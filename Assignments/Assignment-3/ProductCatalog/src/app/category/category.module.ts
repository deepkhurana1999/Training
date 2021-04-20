import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ListAllCategoryComponent } from './list-all-category/list-all-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { HomeCategoryComponent } from './home-category/home-category.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ListAllCategoryComponent,
    DeleteCategoryComponent,
    AddCategoryComponent,
    SearchCategoryComponent,
    HomeCategoryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    FormsModule,
  ]
})
export class CategoryModule { }
