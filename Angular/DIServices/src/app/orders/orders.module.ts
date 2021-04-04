import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { API } from '../APIValue';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [
  {provide: API, useValue:{url:'orders.com', token:'78290'}}]
})
export class OrdersModule { }
