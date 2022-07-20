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
  constructor(
    private router: Router, 
  ) { }

  ngOnInit(): void {
    let cartData = localStorage.getItem('cartitem');
    if(cartData) {
      this.getCartDetails = JSON.parse(localStorage.getItem('cartitem') || '{}');
      // console.log(this.getCartDetails);
    }
  }

  shopmore(){
    this.router.navigateByUrl('dashboard');
  }
  clearcart(id:number){
    let listArrTempdec:any = [];
    localStorage.setItem("cartitem", JSON.stringify(listArrTempdec))  
    return listArrTempdec;
  }

  // deleteitems(id:number){
  //   this.deleteList(id);
  // }

  
  deleteList(getDetails:any){
    let list = localStorage.getItem('cartitem');
    let listArr =JSON.parse(list as string)
    let listArrTemp = [...listArr];
    let index= listArr.findIndex((element:any)=>element.id === getDetails.id)
    listArrTemp.splice(index,1);
    localStorage.setItem('cartitem', JSON.stringify(listArrTemp))
    this.router.navigateByUrl("/reload");
    return listArrTemp;
  }
  
  decrement(getDetails:any){
   if( getDetails.quantity !== 1){
    getDetails.quantity -= 1;
   }     
  }
  increment(getDetails:any){
    if( getDetails.quantity !== 10){
      getDetails.quantity += 1;
     }  
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
}
