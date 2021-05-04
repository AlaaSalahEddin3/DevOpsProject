import { Injectable } from '@angular/core';
import { IPost } from '../SharedClassAndTyes/Post';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../SharedClassAndTyes/User';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  url;
  constructor(private http: HttpClient) {this.url="https://jsonplaceholder.typicode.com/posts"}
  returnAllPosts(): Observable<IPost[]>
{
      return  this.http.get<IPost[]>(this.url).pipe(catchError((err)=>
      {
    return throwError(err.message);
      }));
}

}
