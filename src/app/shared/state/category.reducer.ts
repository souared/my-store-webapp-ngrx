import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { CategoryModel } from 'src/app/shared/models';
import {
  CategoriesPageActions,
  CategoriesApiActions,
} from 'src/app/category/actions';

export interface State extends EntityState<CategoryModel> {
  categoryID: string | null;
}

export const adapter = createEntityAdapter<CategoryModel>({
  selectId:category => category.categoryID
});

export const initialState: State = adapter.getInitialState({
  categoryID: null,
});

export const categoriesReducer = createReducer(
  initialState,
  on(
    CategoriesPageActions.clearSelectedCategory,
    CategoriesPageActions.enter,
    (state) => {
      return {
        ...state,
        categoryID: null,
      };
    }
  ),
  on(CategoriesPageActions.selectCategory, (state, action) => {
    return {
      ...state,
      categoryID: action.categoryID,
    };
  }),
  on(CategoriesApiActions.categoriesLoaded, (state, action) => {
    return adapter.setAll(action.categories, state);
  }),
  on(CategoriesApiActions.categorySaved, (state, action) => {

    return adapter.upsertOne(action.category,state);
  //   if(action.category.categoryID ==="")
  //   {
  //   return adapter.addOne(action.category, {
  //     ...state,
  //     categoryID: null,
  //   });
  // }else{
  //   return adapter.updateOne({id:action.category.categoryID, changes:action.category}, {
  //     ...state,
  //     categoryID: null,
  //   });
  // }
  })
  // on(CategoriesApiActions.bookDeleted, (state, action) => {
  //   return adapter.removeOne(action.bookId, state);
  // })
);

export function reducer(state: State | undefined, action: Action) {
  return categoriesReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveCategoryId = (state: State) => state.categoryID;
export const selectActiveCategory = createSelector(
  selectEntities,
  selectActiveCategoryId,
  (categoriesEntities, categoryID) => {
    return categoryID ? categoriesEntities[categoryID]! : null;
  }
);
