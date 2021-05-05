import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProductWithAsyncComponent } from './list-product-with-async/list-product-with-async.component';
import { ListProductWithSubscribeComponent } from './list-product-with-subscribe/list-product-with-subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListProductWithAsyncComponent,
    ListProductWithSubscribeComponent,
    AddproductComponent,
    DeleteproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
