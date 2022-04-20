import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ProductModel } from 'src/app/shared/models';
import {
  ProductsPageActions,
  ProductsApiActions,
} from 'src/app/product/actions';

export interface State extends EntityState<ProductModel> {
  productID: string | null;
}

export const adapter = createEntityAdapter<ProductModel>({
  selectId:product => product.productID
});

export const initialState: State = adapter.getInitialState({
  productID: null,
});

export const productsReducer = createReducer(
  initialState,
  on(
    ProductsPageActions.clearSelectedProduct,
    ProductsPageActions.enter,
    (state) => {
      return {
        ...state,
        productID: null,
      };
    }
  ),
  on(ProductsPageActions.selectProduct, (state, action) => {
    return {
      ...state,
      productID: action.productId,
    };
  }),
  on(ProductsApiActions.productsLoaded, (state, action) => {
    return adapter.setAll(action.products, state);
  }),
  on(ProductsApiActions.productSaved, (state, action) => {
    return adapter.addOne(action.product, {
      ...state,
      productID: null,
    });
  })
  // on(CategoriesApiActions.bookDeleted, (state, action) => {
  //   return adapter.removeOne(action.bookId, state);
  // })
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveProductId = (state: State) => state.productID;
export const selectActiveProduct = createSelector(
  selectEntities,
  selectActiveProductId,
  (productsEntities, productID) => {
    return productID ? productsEntities[productID]! : null;
  }
);
