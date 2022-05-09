import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { AuthenticationModel } from '../models';
import { AuthenticationsApiActions, AuthenticationsPageActions } from 'src/app/authentication/actions';

export interface State extends EntityState<AuthenticationModel> {
  id: string | null;
}

export const adapter = createEntityAdapter<AuthenticationModel>({
  selectId:item => item.userID
});

export const initialState: State = adapter.getInitialState({
  id: null,
});

export const authenticationReducer = createReducer(
  initialState,
  on(
    AuthenticationsPageActions.clearSelectedAuthentication,
    AuthenticationsPageActions.enter,
    (state) => {
      return {
        ...state,
        id: null,
      };
    }
  ),
  on(AuthenticationsPageActions.selectAuthentication, (state, action) => {
    return {
      ...state,
      id: action.id,
    };
  }),

  on(AuthenticationsApiActions.authenticationLoaded, (state, action) => {
    // return adapter.setAll(action.authentication, state);
    return {
      ...state,
      authentication: action.authentication,
    };
  }),
  on(AuthenticationsApiActions.authenticationSaved, (state, action) => {

    return adapter.upsertOne(action.authentication,state);
    // return adapter.addOne(action.product, {
    //   ...state,
    //   productID: null,
    // });
  }),
  on(AuthenticationsApiActions.authenticationDeleted, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),
  on(AuthenticationsApiActions.authenticationCleared, (state) => {
    return adapter.removeAll(state);
  })


);

export function reducer(state: State | undefined, action: Action) {
  return authenticationReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveAuthenticationId = (state: State) => state.id;
export const selectActiveAuthentication = createSelector(
  selectEntities,
  selectActiveAuthenticationId,
  (authenticationsEntities, id) => {
    return id ? authenticationsEntities[id]! : null;
  }
);
