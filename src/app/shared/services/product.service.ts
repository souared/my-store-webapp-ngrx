import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models';

const BASE_URL = 'https://localhost:44301/';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll() {
    let urlSufix = 'Product/GetAll';
    return this.http.get<ProductModel[]>(`${BASE_URL}/${urlSufix}`);
  }

  getById(id: number) {
    let urlSufix = 'Product/GetById';
    return this.http.get<ProductModel>(`${BASE_URL}/${urlSufix}/${id}`);
  }

  save(client: ProductModel) {
    let urlSufix = 'Product/Save';
    return this.http.post<ProductModel>(`${BASE_URL}/${urlSufix}`, client, HEADER);
  }
}
