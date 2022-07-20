import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {


  @Input()
  imgurl?:string='';

  @Input()
  nameurl?:string='';

  @Input()
  priceurl?:string='';

  @Input()
  quantityurl?:any='';

  itemsCart:any = [];
  // quan:number=1;


  constructor() { }

  ngOnInit(): void {
  }
  
decrement(quantityurl:number)
  {
    // let listArrTempdec:any = [];
    // const list = localStorage.getItem('cartitem');
    // let listArr =JSON.parse(list as string);
    // listArrTempdec = [...listArr];
    //   quantityurl -+ 1 ;
    //   listArrTempdec.push(quantityurl);
    // localStorage.setItem("cartitem", JSON.stringify(listArrTempdec))
  }

increment(quantityurl:number)
 {
  // let listArrTemp:any = [];
  // const list = localStorage.getItem('cartitem');
  // let listArr =JSON.parse(list as string);
  // listArrTemp = [...listArr];
  // quantityurl += 1;
  // listArrTemp.push(quantityurl);
  // localStorage.setItem("cartitem", JSON.stringify(listArrTemp))
  }
}
