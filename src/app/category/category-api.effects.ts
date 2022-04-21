import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap, concatMap } from 'rxjs/operators';
import { CategoryService } from '../shared/services';
import { CategoriesPageActions, CategoriesApiActions } from './actions';

@Injectable()
export class CategoriesApiEffects {
  constructor(
    private categoriesService: CategoryService,
    private actions$: Actions
  ) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesPageActions.enter),
      exhaustMap(() =>
        this.categoriesService
          .getAll()
          .pipe(
            map((categories) =>
              CategoriesApiActions.categoriesLoaded({ categories })
            )
          )
      )
    )
  );

  saveCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesPageActions.saveCategory),
      concatMap((action) =>
        this.categoriesService
          .save(action.category)
          .pipe(
            map((category => CategoriesApiActions.categorySaved({category })))
          )
      )
    )
  );

  // updateBook$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(BooksPageActions.updateBook),
  //     concatMap(action =>
  //       this.booksService
  //         .update(action.bookId, action.changes)
  //         .pipe(map(book => BooksApiActions.bookUpdated({ book })))
  //     )
  //   )
  // );

  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesPageActions.deleteCategory),
      mergeMap(action =>
        this.categoriesService
          .delete(action.categoryId)
          .pipe(
            map(() => CategoriesApiActions.categoryDeleted({ categoryId: action.categoryId }))
          )
      )
    )
  );
}
