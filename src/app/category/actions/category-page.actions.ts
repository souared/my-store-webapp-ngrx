import { createAction, props } from '@ngrx/store';
import { CategoryRequiredProps } from 'src/app/shared/models';

export const enter = createAction('[Categories Page] Enter');

export const getCategories = createAction('[Categories Page] Get categories from store');

export const selectCategory = createAction(
  '[Category Page] Select Category',
  props<{ categoryID: string }>()
);

export const clearSelectedCategory = createAction(
  '[Categories Page] Clear Selected Category'
);

export const saveCategory = createAction(
  '[Categories Page] Save Category',
  props<{ category: CategoryRequiredProps }>()
);

// export const updateBook = createAction(
//   "[Books Page] Update Book",
//   props<{ bookId: string; changes: BookRequiredProps }>()
// );

export const deleteCategory = createAction(
  "[Categories Page] Delete Category",
  props<{ categoryId: string }>()
);
