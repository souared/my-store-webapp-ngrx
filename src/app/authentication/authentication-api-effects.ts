import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, exhaustMap, concatMap } from 'rxjs/operators';
import { AuthenticationService } from '../shared/services';
import { AuthenticationsPageActions, AuthenticationsApiActions } from './actions';

@Injectable()
export class UserAuthenticationsApiEffects {
  constructor(
    private authenticationService: AuthenticationService,
    private actions$: Actions
  ) {}

  loadAuthentications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationsPageActions.enter),
      exhaustMap(() =>
        this.authenticationService
          .getAll()
          .pipe(
            map((authentication) =>
              AuthenticationsApiActions.authenticationLoaded({authentication :authentication})
            )
          )
      )
    )
  );

  saveAuthentication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationsPageActions.saveAuthentication),
      concatMap((action) =>
        this.authenticationService
          .save(action.authentication)
          .pipe(
            map((auth) =>
              AuthenticationsApiActions.authenticationSaved({
                authentication: auth,
              })
            )
          )
      )
    )
  );

  clearAuthentication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthenticationsPageActions.deleteAllAuthentications),
      concatMap((action) =>
        this.authenticationService
          .delete('currentUser')
          .pipe(
            map((auth) => AuthenticationsApiActions.authenticationCleared())
          )
      )
    )
  );


}
