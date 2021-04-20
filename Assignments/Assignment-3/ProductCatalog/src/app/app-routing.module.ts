import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { CategoryComponent } from './category/category.component';
//import { ProductComponent } from './product/product.component';

// const routes: Routes = [
//   //{ path: 'product', component: ProductComponent, }, 
//   /*{ path: 'category', component: CategoryComponent, },*/ ];

  const routes: Routes = [
    { path: 'home', component: HomeComponent, },
    { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
    { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
    { path: '', redirectTo: 'home', pathMatch:'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
