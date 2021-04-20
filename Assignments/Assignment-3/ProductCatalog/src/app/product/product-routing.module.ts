import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { ListAllProductComponent } from './list-all-product/list-all-product.component';
import { ProductComponent } from './product/product.component';
import { SearchProductComponent } from './search-product/search-product.component';
//import { CategoryComponent } from './category/category.component';
//import { ProductComponent } from './product/product.component';

  // const routes: Routes = [
  //   {  path: '', component: ProductComponent  },
  //   {  path: 'product/listofproducts', component: ListAllProductComponent} ];

    const routes: Routes = [
      {  path: '', component: ProductComponent, 
      children:[
      {  path: 'listofproducts', component: ListAllProductComponent},
      {  path: 'addproduct', component: AddProductComponent},
      {  path: 'deleteproduct', component: DeleteProductComponent},
      {  path: 'searchproduct', component: SearchProductComponent},
      {  path: 'home', component: HomeProductComponent},
      { path: '', redirectTo: 'home', pathMatch:'full'} ]
    }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
