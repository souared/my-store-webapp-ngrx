import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationModel } from '../models';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor() {}
  getAll(): Observable<AuthenticationModel> {
    var currentUser = JSON.parse(
      localStorage.getItem('currentUser') || '{}'
    ) as AuthenticationModel;
    return of(currentUser);
  }

  save(user: AuthenticationModel)
  {
    const jsonData = JSON.stringify(user);

    //save the whole shopping cart
    localStorage.setItem('currentUser', jsonData);
    return of(user);
  }


   //removeItem(key: string): undefined
   delete(id: string): Observable<void> {
    return of(localStorage.removeItem(id));
  }

  //clear all local storage
  clearAll(): Observable<void> {
    return of(localStorage.clear());
  }
}
