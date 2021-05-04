import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { PostServiceService } from '../Product Service/post-service.service';
import { IPost } from '../SharedClassAndTyes/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postList:Array<IPost>=[];
  ps;
  err;
  constructor(private postservice:PostServiceService) {
   // this.postList=this.postservice.returnAllPosts();
   this.ps=[{"Name":"Product1","Id":"1","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"},
   {"Name":"Product1","Id":"1","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"},
   {"Name":"Product1","Id":"1","quantity":7,"price":44,"image":"assets\\Images\\adv_1.png"}
 ]
   }

  ngOnInit(): void {
  //  alert(this.ps);
    this.postservice.returnAllPosts().subscribe(
      Posts=>
      {
        this.postList=Posts;
      },
      errorResponse=>
      {
       this.err=errorResponse;
      }
    )
  }

}
