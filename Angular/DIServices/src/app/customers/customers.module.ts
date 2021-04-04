import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { API } from '../APIValue';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [
  {provide: API, useValue:{url:'customers.com', token:'168990'}}]
})
export class CustomersModule { }
