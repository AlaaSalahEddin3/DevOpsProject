import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userNamevalidator, validatePassword } from '../validationsFolder/validate';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  RgisterForm=this.fb.group({
    userName:['',Validators.required,Validators,userNamevalidator(/'[a-zA-Z]+'/)],
    email:['',Validators.required,Validators.required,userNamevalidator(/"^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"/)],
    password:['',Validators.required],
    confirmPass:['',Validators.required]
  },{Validators:[validatePassword]}
  )
  ngOnInit(): void {
  }
  views=["","",""]
  get userName ()
  {
    return this.RgisterForm.get('userName');
  }
  get email()
  {
    return this.RgisterForm.get('email');

  }
  get confirmPass()
  {
    return this.RgisterForm.get('confirmPass');
  }

}
