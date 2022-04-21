import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientModel, ClientRequiredProps } from '../models';

const BASE_URL = 'https://localhost:44301';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAll() {
    let urlSufix = 'Client/GetAll';
    return this.http.get<ClientModel[]>(`${BASE_URL}/${urlSufix}`);
  }

  getById(id: number) {
    let urlSufix = 'Client/GetById';
    return this.http.get<ClientModel>(`${BASE_URL}/${urlSufix}/${id}`);
  }

  save(client: ClientRequiredProps) {
    let urlSufix = 'Client/Save';
    return this.http.post<ClientModel>(`${BASE_URL}/${urlSufix}`, client, HEADER);
  }

  delete(id:number){
    let urlSufix = 'Client/Delete';
    return this.http.delete(`${BASE_URL}/${urlSufix}/${id}`);
  }
}
