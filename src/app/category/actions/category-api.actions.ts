import { createAction, props } from "@ngrx/store";
import { CategoryModel } from "src/app/shared/models";

export const categoriesLoaded = createAction(
  "[Categories API] Categories Loaded Success",
  props<{ categories: CategoryModel[] }>()
);

export const categorySaved = createAction(
  "[Categories API] Category Saved",
  props<{ category: CategoryModel }>()
);

// export const bookUpdated = createAction(
//   "[Books API] Book Updated",
//   props<{ book: BookModel }>()
// );

// export const bookDeleted = createAction(
//   "[Books API] Book Deleted",
//   props<{ bookId: string }>()
// );
