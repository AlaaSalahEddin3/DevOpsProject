import { Component, OnInit } from '@angular/core';
import { Userclass } from '../Classes/userclass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
views=['FcesBook','Twitter','Google']
userModel=new Userclass('','','','');
  constructor() { }

  ngOnInit(): void {
  }

}
