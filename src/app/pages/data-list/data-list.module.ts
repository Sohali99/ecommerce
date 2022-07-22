import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list.component';
import { DataListRoutingModule } from './data-list-routing.module';


@NgModule({
  declarations: [
    DataListComponent
  ],
  imports: [
    CommonModule,
    DataListRoutingModule
  ]
})
export class DataListModule { }
