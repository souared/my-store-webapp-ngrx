import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel, OrderRequiredProps } from '../models';

const BASE_URL = 'https://localhost:44301';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getAll() {
    let urlSufix = 'Order/GetAll';
    return this.http.get<OrderModel[]>(`${BASE_URL}/${urlSufix}`);
  }

  getById(id: string) {
    let urlSufix = 'Order/GetById';
    return this.http.get<OrderModel>(`${BASE_URL}/${urlSufix}/${id}`);
  }

  save(order: OrderRequiredProps) {
    let urlSufix = 'Order/Save';
    return this.http.post<OrderModel>(`${BASE_URL}/${urlSufix}`, order, HEADER);
  }

  delete(id:string){
    let urlSufix = 'Order/Delete';
    return this.http.delete(`${BASE_URL}/${urlSufix}/${id}`);
  }
}
