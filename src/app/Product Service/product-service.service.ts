import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 prods=[];
  constructor() { 
this.prods= 
  [{"name":"Product1","id":"1","discount":"No Discount","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"},
  {"name":"Product1","id":"1","discount":"No Discount","quantity":7,"price":44,"image":"assets\\Images\\adv_3.png"},
  {"name":"Product2","id":"2","discount":"30%","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"},
  {"name":"Product3","id":"3","discount":"30%","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"},
  {"name":"Product4","id":"4","discount":"No Discount","quantity":7,"price":44,"image":"assets\\Images\\banner_product.png"},
  {"name":"Product4","id":"4","discount":"No Discount","quantity":7,"price":44,"image":"assets\\Images\\banner_product.png"}
]

  }
  GetAllProducts()
  {
  return this.prods;
}
GetProductbyId(id:number)
{
       this.prods.forEach(element =>
         {
         if(element.id==id)
         {
           return element;

         }
       
       });
       return null;
       }
      }
