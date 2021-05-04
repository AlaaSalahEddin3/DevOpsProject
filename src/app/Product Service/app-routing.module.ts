import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PostComponent } from '../post/post.component';
import { ProdDiscountComponent } from '../prod-discount/prod-discount.component';
import { ProdNodiscountComponent } from '../prod-nodiscount/prod-nodiscount.component';
import { ProductComponent } from '../product/product.component';
import { RegisterComponent } from '../register/register.component';
import { UserComponent } from '../user/user.component';


const routes: Routes = [

  {path:'Product',component:ProductComponent,children:[

    {path:'prod-discount',component:ProdDiscountComponent},
    {path:'prod-nodiscount',component:ProdNodiscountComponent}
  ]},
  {path:'Users',component:UserComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'Posts',component:PostComponent},

];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
