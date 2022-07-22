import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressFormComponent } from './pages/address-form/address-form.component';
import { DataListModule } from './pages/data-list/data-list.module';
@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
