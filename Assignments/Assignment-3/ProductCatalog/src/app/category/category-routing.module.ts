import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryComponent } from './category/category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { ListAllCategoryComponent } from './list-all-category/list-all-category.component';
import { SearchCategoryComponent } from './search-category/search-category.component';
//import { CategoryComponent } from './category/category.component';
//import { ProductComponent } from './product/product.component';

  const routes: Routes = [
    {  path: '', component: CategoryComponent, 
    children:[
    {  path: 'listofcategories', component: ListAllCategoryComponent},
    {  path: 'addcategory', component: AddCategoryComponent},
    {  path: 'deletecategory', component: DeleteCategoryComponent},
    {  path: 'searchcategory', component: SearchCategoryComponent},
    {  path: 'home', component: HomeCategoryComponent},
    { path: '', redirectTo: 'home', pathMatch:'full'} ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule { }
