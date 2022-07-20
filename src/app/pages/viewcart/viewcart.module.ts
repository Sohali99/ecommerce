import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcartRoutingModule } from './viewcart-routing.module';
import { ViewcartComponent } from './viewcart.component';
import { AddcartModule } from 'src/app/component/addcart/addcart.module';


@NgModule({
  declarations: [
    ViewcartComponent
  ],
  imports: [
    CommonModule,
    ViewcartRoutingModule,
    AddcartModule
  ]
})
export class ViewcartModule { }
