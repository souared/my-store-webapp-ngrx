import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel, CategoryRequiredProps } from '../models';

const BASE_URL = 'https://localhost:44301';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll() {
    let urlSufix = 'Category/GetAll';
    return this.http.get<CategoryModel[]>(`${BASE_URL}/${urlSufix}`);
  }

  getById(id: number) {
    let urlSufix = 'Category/GetById';
    return this.http.get<CategoryModel>(`${BASE_URL}/${urlSufix}/${id}`);
  }

  save(category: CategoryRequiredProps) {
    let urlSufix = 'Category/Save';
   return this.http.post<CategoryModel>(`${BASE_URL}/${urlSufix}`, category, HEADER);

  }
}
