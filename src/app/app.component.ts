import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  

})

export class AppComponent {
  @ViewChild(ProductComponent) childComponent:ProductComponent;
  prodlist=[];
  title = 'firstProj';
  flag=false;
  

ngAfterViewInit()
{

  this.childComponent.renderValue();
  this.prodlist=this.childComponent.prods;

 // alert("hello");
}
get()
{
  this.flag=true;
  console.log(this.prodlist);
}
}
