import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Product Service/product-service.service';

@Component({
  selector: 'app-prod-nodiscount',
  templateUrl: './prod-nodiscount.component.html',
  styleUrls: ['./prod-nodiscount.component.css']
})
export class ProdNodiscountComponent implements OnInit {
  products=[];
  noDiscountArr=[];
  constructor(private prodService:ProductServiceService) { }

  ngOnInit(): void {
    this.products=this.prodService.GetAllProducts();
    this.products.forEach(element => {
    if(element.discount!="No Discount")
    {
      this.noDiscountArr.push(element);
    }
  });
  }

}
