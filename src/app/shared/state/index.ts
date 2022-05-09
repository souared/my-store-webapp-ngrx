import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCategories from './category.reducer';
import * as fromClients from './client.reducer';
import * as fromProducts from './product.reducer';
import * as fromOrders from './order.reduce';

export interface State {
  categories: fromCategories.State;
  clients: fromClients.State;
  products: fromProducts.State;
  orders:fromOrders.State;
}

export const reducers: ActionReducerMap<State> = {
  categories: fromCategories.reducer,
  clients:fromClients.reducer,
  products: fromProducts.reducer,
  orders: fromOrders.reducer
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
 * Client Selectors
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


 /**
 * Product Selectors
 */
  export const selectProductsState = (state: State) => state.products;
  export const selectAllproducts = createSelector(
    selectProductsState,
    fromProducts.selectAll
  );
  export const selectActiveProduct = createSelector(
    selectProductsState,
    fromProducts.selectActiveProduct
  );


  /**
 * Order Selectors
 */
 export const selectOrdersState = (state: State) => state.orders;
 export const selectAllorders = createSelector(
   selectOrdersState,
   fromOrders.selectAll
 );
 export const selectActiveOrder = createSelector(
   selectOrdersState,
   fromOrders.selectActiveOrder
 );
