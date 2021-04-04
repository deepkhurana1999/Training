import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TShirtDataBindingComponent } from './t-shirt-data-binding/t-shirt-data-binding.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomErrorHandlerService } from './custom-error-handler.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TShirtDataBindingComponent,
    ProductsComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule
  ],
  providers: [{provide:ErrorHandler,useClass:CustomErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }