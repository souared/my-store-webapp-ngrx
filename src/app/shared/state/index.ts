import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import * as fromCategories from './category.reducer';

export interface State {
  categories: fromCategories.State;
}

export const reducers: ActionReducerMap<State> = {
  categories: fromCategories.reducer,
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
