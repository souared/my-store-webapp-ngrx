import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthResponseModel } from '../models/authResponse.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'https://localhost:7045/connect/token';



  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  authenticate() {
    let header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', 'storeApi');
    body.set('scope', 'storeApi.read');
    body.set('client_secret', 'SolveraCodeGuide');

    this.http
      .post<AuthResponseModel>(this.url, body, {
        headers: header,
      })
      .subscribe((jwt) => {
        if (jwt && jwt.access_token) {
          console.log(jwt.access_token);
          localStorage.setItem('token', jwt.access_token);
        }
      });
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (token) return !this.jwtHelper.isTokenExpired(token);
    else return false;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  getAPIAuth()
  {
    //Authenticate to get token
    if (!this.isAuthenticated()) {
      //authicate the server and get new token
      this.authenticate();
    }
    return this.getToken();

  }
}
