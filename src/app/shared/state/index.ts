import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import * as fromCategories from './category.reducer';
import * as fromClients from './client.reducer';

export interface State {
  categories: fromCategories.State;
clients: fromClients.State;
}

export const reducers: ActionReducerMap<State> = {
  categories: fromCategories.reducer,
  clients:fromClients.reducer
};

/**
 * Catgory Selectors
 */
export const selectCategoriesState = (state: State) => state.categories;
export const selectAllcategories = createSelector(
  selectCategoriesState,
  fromCategories.selectAll
);
export const selectActiveCategory = createSelector(
  selectCategoriesState,
  fromCategories.selectActiveCategory
);




/**
 * Catgory Clients
 */
 export const selectClientsState = (state: State) => state.clients;
 export const selectAllclients = createSelector(
   selectClientsState,
   fromClients.selectAll
 );
 export const selectActiveClient = createSelector(
   selectClientsState,
   fromClients.selectActiveClient
 );
