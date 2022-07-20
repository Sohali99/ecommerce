import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }


  // getProduct(){
  //   return this.productList.asObservable();
  // }
  // setProduct(product : any){
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  // addtoCart(product : any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log(this.cartItemList)
  // }
}
