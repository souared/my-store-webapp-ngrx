import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel, OrderRequiredProps } from '../models';
import { AuthService } from './auth.service';

const BASE_URL = 'https://localhost:44301';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  auth_token!: string |null;
  headers!: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.getAPIAccess();
  }


  getAPIAccess() {
    this.auth_token = this.authService.getAPIAuth();
    if (this.auth_token !== null) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      });
    } else {
      //Exprired
      console.log('Token unavailable or expired.');
    }
  }

  getAll() {
    this.getAPIAccess();
    let urlSufix = 'Order/GetAll';
    return this.http.get<OrderModel[]>(`${BASE_URL}/${urlSufix}`,{
      headers: this.headers,
    });
  }

  getById(id: string) {
    this.getAPIAccess();
    let urlSufix = 'Order/GetById';
    return this.http.get<OrderModel>(`${BASE_URL}/${urlSufix}/${id}`,{
      headers: this.headers,
    });
  }

  save(order: OrderRequiredProps) {
    this.getAPIAccess();
    let urlSufix = 'Order/Save';
    return this.http.post<OrderModel>(`${BASE_URL}/${urlSufix}`, order,{
      headers: this.headers,
    });
  }

  delete(id:string){
    this.getAPIAccess();
    let urlSufix = 'Order/Delete';
    return this.http.delete(`${BASE_URL}/${urlSufix}/${id}`,{
      headers: this.headers,
    });
  }
}
