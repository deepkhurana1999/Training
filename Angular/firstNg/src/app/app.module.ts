import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { TShirtDataBindingComponent } from './t-shirt-data-binding/t-shirt-data-binding.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomErrorHandlerService } from './custom-error-handler.service';
import { AppRoutingModule } from './app-routing.module';
import { UnrelatedHostComponent } from './unrelated-host/unrelated-host.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';

import { ChangeColorDirective } from './change-color.directive';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductSearchPipe } from './product-search.pipe';
import { ProductPriceFilterPipe } from './product-price-filter.pipe';
import { RxJsComponent } from './rx-js/rx-js.component';

@NgModule({
  declarations: [
    AppComponent,
    TShirtDataBindingComponent,
    ProductsComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    UnrelatedHostComponent,
    Child1Component,
    Child2Component,
    AttributeDemoComponent,
    ChangeColorDirective,
    GlobalErrorComponent,
    HomeComponent,
    LoginComponent,
    ProductSearchPipe,
    ProductPriceFilterPipe,
    RxJsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  
  providers: [{provide:ErrorHandler,useClass:CustomErrorHandlerService}],

  bootstrap: [AppComponent]
})
export class AppModule { }
