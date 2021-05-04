import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './Product Service/app-routing.module';
import { HttpClientModule } from  '@angular/common/http';

import { CommonModule } from "@angular/common";
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { ProdDiscountComponent } from './prod-discount/prod-discount.component';
import { ProdNodiscountComponent } from './prod-nodiscount/prod-nodiscount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NotesComponent } from './notes/notes.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    PostComponent,
    UserComponent,
    ProdDiscountComponent,
    ProdNodiscountComponent,
    LoginComponent,
    RegisterComponent,
    ReactiveFormComponent,
    NotesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
