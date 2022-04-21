import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap, concatMap } from 'rxjs/operators';
import { ProductService } from '../shared/services';
import { ProductsPageActions, ProductsApiActions } from './actions';

@Injectable()
export class ProductsApiEffects {
  constructor(
    private productsService: ProductService,
    private actions$: Actions
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.enter),
      exhaustMap(() =>
        this.productsService
          .getAll()
          .pipe(
            map((products) =>
              ProductsApiActions.productsLoaded({ products })
            )
          )
      )
    )
  );

  saveProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.saveProduct),
      concatMap((action) =>
        this.productsService
          .save(action.product)
          .pipe(
            map((product => ProductsApiActions.productSaved({product})))
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

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.deleteProduct),
      mergeMap(action =>
        this.productsService
          .delete(action.productId)
          .pipe(
            map(() => ProductsApiActions.productDeleted({ productId: action.productId }))
          )
      )
    )
  );
}
