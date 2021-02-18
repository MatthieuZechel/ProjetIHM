import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpClient: HttpClient) { }

  login(email: string,password: string): Observable<boolean> {
    return this.httpClient.post('https://reqres.in/api/login', {
      email,
      password
    }).pipe(
      map((response : any) => !!response?.token),
      catchError(() => of(false))
    );
  }
}
