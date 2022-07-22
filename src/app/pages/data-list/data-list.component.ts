import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  listArr:any=[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cartorderdetails()
  }
  cartorderdetails(){
    let list = localStorage.getItem('orderItem');
    if(list){
    this.listArr =JSON.parse(localStorage.getItem('orderItem') || '{}');
    console.log(this.listArr)
  }
  }
  backtohome(){
    this.router.navigateByUrl('dashboard');
  }
  onCanceled(orderId:number){
    let orderDetails = this.listArr;
    let objIndex = this.listArr.findIndex(((obj:any) => obj.orderId === orderId));
    orderDetails[objIndex].status = "Canceled";
    localStorage.setItem("orderlist",JSON.stringify(orderDetails));
    console.log(this.listArr);
  }
}

