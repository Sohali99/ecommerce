import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  getCartDetails:any = [];
  listArr:any = [];
  acc:number=0
  constructor(
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.getCartDetails = JSON.parse(localStorage.getItem('cartitem') || '{}');
      if(localStorage.getItem('cartitem')){
        this.getCartDetails.products = JSON.parse(localStorage.getItem('cartitem') || '{}')
        this.total = this.getCartDetails.products.reduce(function(acc:any,val:any) {
          return acc + (val.price * val.quantity);
        }, 0)
      }
    }
  total:number=0;
  loadTotal() {
}

  shopmore(){
    this.router.navigateByUrl('dashboard');
  }
  clearcart(id:number){
    let listArrTempdec:any = [];
    localStorage.setItem("cartitem", JSON.stringify(listArrTempdec))  
    return listArrTempdec;
  }
  
  deleteList(getDetails:any){
    let list = localStorage.getItem('cartitem');
    let listArr =JSON.parse(list as string)
    let listArrTemp = [...listArr];
    let index= listArrTemp.findIndex((element:any)=>element.id === getDetails.id)
    listArrTemp.splice(index,1);
    localStorage.setItem('cartitem', JSON.stringify(listArrTemp))
    return listArrTemp;
  }
  
  decrement(getDetails:any){
   if( getDetails.quantity !== 1){
    getDetails.quantity -= 1;
   }    
   localStorage.setItem("cartitem", JSON.stringify(getDetails))
  }
  increment(getDetails:any){
    if( getDetails.quantity !== 10){
      getDetails.quantity += 1;
     }  
     localStorage.setItem("cartitem", JSON.stringify(getDetails))
  }
  
  fetchdata(getDetails:any){
    const list = localStorage.getItem('cartitem');
    if(list){
        const listArr = JSON.parse(list as string);
        this.listArr = [...listArr];
    }
    this.listArr.push(getDetails);
    localStorage.setItem("cartitem", JSON.stringify(this.listArr))
  }
  
  addAddress(){
    this.router.navigateByUrl('dashboard/address')
  }
}
