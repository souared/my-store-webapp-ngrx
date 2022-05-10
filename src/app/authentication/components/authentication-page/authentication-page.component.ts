import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/shared/state';
import { AuthenticationsPageActions } from '../../actions';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss'],
})
export class AuthenticationPageComponent {
  constructor(private store: Store<State>, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {



    var userAuth = {
      userID: 'null',
      email: '',
      token: '',
    };

    userAuth.email = this.loginForm.value['email'];
    userAuth.userID = '1';
    userAuth.token = 'token to be retrieved after Authentication';
// retreive generated token

//Save access to local storage for Auto-login
    this.store.dispatch(
      AuthenticationsPageActions.saveAuthentication({
        authentication: userAuth,
      })
    );

    // redirect to dashboard
    this.router.navigate(['clients']);
  }
}
