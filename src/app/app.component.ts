import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State, selectAllAuthentications, selectAuthenticationsState, selectActiveAuthentication } from 'src/app/shared/state';
import { AuthenticationsPageActions } from './authentication/actions';
import { AuthenticationModel } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store-webapp-ngrx';

  loggedIn: boolean = false;
  authUsers$: Observable<AuthenticationModel | null>;
  constructor(private store: Store<State>, private router: Router) {
    this.authUsers$ = store.select(selectActiveAuthentication);
  }
  ngOnInit(): void {
    this.store.dispatch(AuthenticationsPageActions.selectAuthentication({userId: '1'}));
    this.authUsers$.subscribe((c) => {
      if (c != null ) {
        this.loggedIn = true;
        //navigate to dashboard
        this.router.navigate(['clients']);
      } else {
        this.loggedIn = false;
        this.router.navigate(['login']);

      }
    });
  }

  logout()
  {
    this.store.dispatch(AuthenticationsPageActions.deleteAllAuthentications());
    this.router.navigate(['login']);
  }
}
