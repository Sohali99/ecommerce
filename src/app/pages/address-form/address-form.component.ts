import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  showErrors=false;
  postArr:any = [];
  name = '';
  phone = '';
  user: any = {};
  getCartDetails:any = [];
  arraylist:any =[];
  cartarray:any=[];
  order:any=[];
  form: FormGroup; 

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder
  ) { 
    this.form = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.minLength(2)]),
      phone: new FormControl("",[Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]),
      PinNo: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  validate(){
    this.showErrors =true;
    return this.form.valid;
     }
  submit(FormValue:any) {
    this.router.navigateByUrl('dashboard/datalist');
    let orderitems=localStorage.getItem('cartitem')
    this.cartarray= JSON.parse(orderitems as string);
    console.log(this.cartarray);

    let totalPrice = 0;
    this.cartarray.map((e:any)=> {
      totalPrice = totalPrice + (e.quantity * e.price); 
    })
    if(localStorage.getItem('cartitem')){
      this.getCartDetails= JSON.parse(localStorage.getItem('orderItem')|| '{}');
      this.order = {
        orderId : "ORDER"+ Date.now(),
        status : "pending",
        deliveryAddress : FormValue,
        productsList : this.cartarray,
        date: new Date(),
        orderPrice:totalPrice
     }
  }
  if(localStorage.getItem('orderItem')){
    let prevOrder = JSON.parse(localStorage.getItem('orderItem') || '{}');
    prevOrder.push(this.order);
    localStorage.setItem("orderItem",JSON.stringify(prevOrder));
   }
   else{
     let tempArr =[];
     tempArr.push(this.order);
     localStorage.setItem("orderItem",JSON.stringify(tempArr));
   }
   localStorage.removeItem('cartitem');
  }

}
