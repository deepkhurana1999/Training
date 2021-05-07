import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'home/product/:id',component:DisplayProductComponent},
  {path:'home/add',component:AddproductComponent},
  {path:'home/edit', component:UpdateproductComponent},
  {path:'home/product/edit/:id', component:EditProductComponent},
  {path:'home/delete', component:DeleteproductComponent  },
  {path:'', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
