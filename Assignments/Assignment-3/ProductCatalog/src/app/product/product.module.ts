import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { Routes } from '@angular/router';
import { ListAllProductComponent } from './list-all-product/list-all-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { HomeProductComponent } from './home-product/home-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ListAllProductComponent,
    AddProductComponent,
    DeleteProductComponent,
    SearchProductComponent,
    HomeProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule
  ]
})
export class ProductModule { }
