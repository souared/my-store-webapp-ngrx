import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  mergeMap,
  map,
  exhaustMap,
  concatMap,
  shareReplay,
} from 'rxjs/operators';
import { OrderService } from '../shared/services';
import { OrdersPageActions, OrdersApiActions } from './actions';

@Injectable()
export class OrdersApiEffects {
  constructor(private ordersService: OrderService, private actions$: Actions) {}

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersPageActions.enter),
      exhaustMap(() =>
        this.ordersService
          .getAll()
          .pipe(map((orders) => OrdersApiActions.ordersLoaded({ orders })))
      )
    )
  );

  saveOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersPageActions.saveOrder),
      concatMap((action) =>
        this.ordersService
          .save(action.order)
          .pipe(map((order) => OrdersApiActions.orderSaved({ order })))
      )
    )
  );

  loadSingleOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersPageActions.LoadSingleOrder),
      exhaustMap((action) =>
        this.ordersService.getById(action.orderId).pipe(
          map((order) => OrdersApiActions.singleOrderLoaded({ order: order })),
          shareReplay(1)
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

  deleteOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersPageActions.deleteOrder),
      mergeMap((action) =>
        this.ordersService
          .delete(action.orderId)
          .pipe(
            map(() =>
              OrdersApiActions.orderDeleted({ orderId: action.orderId })
            )
          )
      )
    )
  );
}
