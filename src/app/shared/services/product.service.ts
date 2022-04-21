import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel, ProductRequiredProps } from '../models';

const BASE_URL = 'https://localhost:44301';
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

  getById(id: string) {
    let urlSufix = 'Product/GetById';
    return this.http.get<ProductModel>(`${BASE_URL}/${urlSufix}/${id}`);
  }

  save(product: ProductRequiredProps) {
    let urlSufix = 'Product/Save';
    return this.http.post<ProductModel>(`${BASE_URL}/${urlSufix}`, product, HEADER);
  }

  delete(id:string){
    let urlSufix = 'Product/Delete';
    return this.http.delete(`${BASE_URL}/${urlSufix}/${id}`);
  }
}
