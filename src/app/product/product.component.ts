import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductServiceService } from '../Product Service/product-service.service';
import { Discount } from '../SharedClassAndTyes/Discount';
//import { Icategory } from '../SharedClassAndTyes/Category';
//import { Discount } from '../SharedClassAndTyes/Discount';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
discount:Discount;

 storeName:string;
 storeLogo:String;
 categories;
 ps;
 
emplist;
prods;
 //categoryArr:Array<Icategory>;
 ClientName:String;
 Ispurshased:boolean;
  constructor(private prodService:ProductServiceService,private route:Router,private activeRoute:ActivatedRoute) {
    this.discount=Discount.noDiscount;
    this.storeName="StoreOne";
    this.ClientName="Alaa Salah";
    this.storeLogo="assets\\Images\\2.PNG";
    this.Ispurshased=false;
    this.categories=[{"name":"cat1"},{"name":"cat2"},{"name":"cat3"}]
    this.ps=[{"Name":"Product1","Id":"1","discount":"No Discount","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"},
    {"Name":"Product1","Id":"1","discount":"No Discount","quantity":7,"price":44,"image":"assets\\Images\\adv_3.png"},
    {"Name":"Product2","Id":"2","discount":"30%","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"},
    {"Name":"Product3","Id":"3","discount":"30%","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"},
    {"Name":"Product4","Id":"4","discount":"No Discount","quantity":7,"price":44,"image":"assets\\Images\\banner_product.png"}
  ]
   

   
}

  ngOnInit(): void {
  }
  hide()
  {
    this.Ispurshased=true;
   // console.log("hhhh");

  }
  renderValue()
  {
        
     this.prods=this.prodService.GetAllProducts();
    
  }
  getProdwithDiscount()
  {
   // alert("jjjjjjj");
         this.route.navigate(['prod-discount'],{relativeTo:this.activeRoute})
  }
  getProdwithOutDiscount()
  {
    this.route.navigate(['prod-nodiscount'],{relativeTo:this.activeRoute})
  }
}
