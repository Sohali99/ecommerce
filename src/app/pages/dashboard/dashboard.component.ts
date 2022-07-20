import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import {MatTabsModule} from '@angular/material/tabs';


 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    id:any='all';
    categoryItem='';
    colorFilter='';
    itemsCart:any = [];
    postArr:any = [];
    cartlist:any = [ 
    {
      id: 1, 
      name: 'Tomato',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      availibility: 'true',
      price: 10,
      color: 'red',
      category: 'vegetable',
      quantity:1
    },
    {
      id: 2, 
      name: 'Potato',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      availibility: 'false',
      price: 20,
      color: 'red',
      category: 'vegetable',
      quantity:1
    },
    {
      id: 3, 
      name: 'Cabbage',
      image: 'https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2518893.jpg&fm=jpg',
      availibility: 'false',
      price: 50,
      color: 'green',
      category: 'vegetable',
      quantity:1
    },
    {
      id: 4, 
      name: 'Apple',
      image: 'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1728480094.jpg',
      availibility: 'true',
      price: 40,
      color: 'red',
      category: 'fruit',
      quantity:1
    },
    {
      id: 5, 
      name: 'Guava',
      image: 'https://www.gardeningknowhow.com/wp-content/uploads/2017/10/guava-fruit.jpg',
      availibility: 'true',
      price: 30,
      color: 'green',
      category: 'fruit',
      quantity:1
    },
    {
      id: 6, 
      name: 'Orange',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUA9KTeftoWTXcRjps56Wl1YtVhfbykDQKr7QE5gfQRA&s=36',
      availibility: 'true',
      price: 30,
      color: 'red',
      category: 'fruit',
      quantity:1
    }

  ]

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    this.cartlist=this.cartlist.sort((low:any, high:any) => low.price - high.price);
  }
//for price
  sort(event: any){
    switch (event.target.value) {
      case "Low":
        {
          this.cartlist = this.cartlist.sort((low:any, high:any) => low.price - high.price);
          break;
        }
      case "High":
        {
          this.cartlist = this.cartlist.sort((low:any, high:any) => high.price - low.price);
          break;
        }
      default: {
          this.cartlist = this.cartlist.sort((low:any, high:any) => low.Price - high.Price);
          break;
        }
     }
     return this.cartlist;
}

//for category
sortcategory(event: any){
  switch (event.target.value) {
    case "all":
      {
        this.cartlist = this.cartlist.filter((e:any) => e.category === 'vegetable'&&'fruit');
        break;
      }
    case "vegetable":
      {
        this.cartlist = this.cartlist.filter((e:any) => e.category === 'vegetable');
        break;
      }
      case "fruit":
        {
          this.cartlist = this.cartlist.filter((e:any) => e.category === 'fruit');
          break;
        }
      default:
      {
        this.cartlist = this.cartlist.filter((e:any) => e.category === this.categoryItem);
        break;
      }
   }
   return this.cartlist;
}

//by color
sortcolor(event : any){
  switch (event.target.value) {
    case "all":
      {
        return this.cartlist;
      }
    case "green":
      {
        this.cartlist = this.cartlist.filter((e:any) => e.color === 'green');
        break;
      }
      case "red":
        {
          this.cartlist = this.cartlist.filter((e:any) => e.color === 'red');
          break;
        }
      default:
      {
        return this.cartlist;
      }
   }
   return this.cartlist;
}


  viewcart(){
    this.router.navigateByUrl('dashboard/viewcart');
  }
  additem(data:any){
    const list = localStorage.getItem('cartitem');
    if(list){
        const listArr = JSON.parse(list as string);
        this.postArr = [...listArr];
    }
    this.postArr.push(data);
    localStorage.setItem("cartitem", JSON.stringify(this.postArr))
 
    return true;
  }
}
