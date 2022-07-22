import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m)=>m.DashboardModule)   
  },
  {
    path: 'dashboard/viewcart',
    loadChildren: () => import('./pages/viewcart/viewcart.module').then((m)=>m.ViewcartModule)   
  },
  {
    path:'dashboard/address',
    loadChildren:() => import ( './pages/address-form/address-form.module' ).then((m)=>m.AddressFormModule)
  },
  {
    path:'dashboard/datalist',
    loadChildren:() => import ( './pages/data-list/data-list.module' ).then((m) => m.DataListModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
