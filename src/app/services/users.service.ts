import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public httpClient : HttpClient) { }

  getUsersList(){
    return this.httpClient.get('https://reqres.in/api/users?page=1')
    .pipe(
      map((response: any) => response?.data)
    );
  }

  getUserDetail(id: number): Observable<any>{
    return this.httpClient.get(`https://reqres.in/api/users/${id}`)
    .pipe(
      map((response: any) => response?.data)
    );
  }

  addUser(name: string,job : string): Observable<any>{
    return this.httpClient.post('https://reqres.in/api/users', {
      name,
      job
    }).pipe(
      map((response : any) => response?.data)
    );
  }
}
