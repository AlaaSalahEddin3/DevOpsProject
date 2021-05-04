import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Product Service/user-service.service';
import { IUser } from '../SharedClassAndTyes/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList:IUser[]=[];
  testList=[]
  constructor(private userservice:UserServiceService) { 
   this.testList=["hello","asd","dfg"];
  }

  ngOnInit(): void {
    alert("jjj");
    this.userservice.returnAllUsers().subscribe(
      users=>
      {
        this.userList=users;
      },
      errorResponse=>
      {
    //   this.errorMsg=errorResponse;
      }
    )
    console.log(this.userList);
  }

}
