import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ClientModel } from 'src/app/shared/models';
import {
  ClientsPageActions,
  ClientsApiActions,
} from 'src/app/client/actions';

export interface State extends EntityState<ClientModel> {
  clientID: string | null;
}

export const adapter = createEntityAdapter<ClientModel>({
  selectId:client => client.clientID
});

export const initialState: State = adapter.getInitialState({
  clientID: null,
});

export const clientsReducer = createReducer(
  initialState,
  on(
    ClientsPageActions.clearSelectedClient,
    ClientsPageActions.enter,
    (state) => {
      return {
        ...state,
        clientID: null,
      };
    }
  ),
  on(ClientsPageActions.selectClient, (state, action) => {
    return {
      ...state,
      clientID: action.clientId,
    };
  }),
  on(ClientsApiActions.clientsLoaded, (state, action) => {
    return adapter.setAll(action.clients, state);
  }),
  on(ClientsApiActions.clientSaved, (state, action) => {
    return adapter.upsertOne(action.client,state);
    // return adapter.addOne(action.client, {
    //   ...state,
    //   clientID: null,
    // });
  })
  // on(CategoriesApiActions.bookDeleted, (state, action) => {
  //   return adapter.removeOne(action.bookId, state);
  // })
);

export function reducer(state: State | undefined, action: Action) {
  return clientsReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveClientId = (state: State) => state.clientID;
export const selectActiveClient = createSelector(
  selectEntities,
  selectActiveClientId,
  (clientsEntities, clientID) => {
    return clientID ? clientsEntities[clientID]! : null;
  }
);
