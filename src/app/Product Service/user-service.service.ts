import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../SharedClassAndTyes/User';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
url;
  constructor(private http: HttpClient) {this.url="https://jsonplaceholder.typicode.com/users"}
  returnAllUsers(): Observable<IUser[]>
{
      return  this.http.get<IUser[]>(this.url).pipe(catchError((err)=>
      {
    return throwError(err.message);
      }));
}

}
