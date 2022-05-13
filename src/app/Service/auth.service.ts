import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

interface UserPostResponse {
  user: any;
  success: boolean;
  msg:any;
  authToken:any;
  token:any
}
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  authToken:any;
  user:any;
  constructor(private http: HttpClient, private jwtHelper:JwtHelperService) {}

  registerUser(user: any):Observable<UserPostResponse> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post<UserPostResponse>('http://localhost:3000/users/register', user, { headers: headers })
    .pipe(map(res => res));
     
  }

  authenticateUser(user:any):Observable<UserPostResponse> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.post<UserPostResponse>('http://localhost:3000/users/authenticate', user, { headers: headers })
    .pipe(map(res => res));
     
  }

  getProfile() {
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.set('Authorization',this.authToken);
    console.log(this.authToken)
    // setHeaders:{Authorization:this.authToken}
    // console.log(this.authToken);
    headers.append('content-type', 'application/json');
    return this.http.get<UserPostResponse>('http://localhost:3000/users/profile',{ headers: headers })
    .pipe(map(res => res));
     
  }

  storeUserData(token:any, user:any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    
  }

  loggedIn(){
    if (this.jwtHelper.isTokenExpired()) {
      return false;
    } else {
      return true
    }
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
