import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap, concatMap } from 'rxjs/operators';
import { ClientService } from '../shared/services';
import { ClientsPageActions, ClientsApiActions } from './actions';

@Injectable()
export class ClientsApiEffects {
  constructor(
    private clientsService: ClientService,
    private actions$: Actions
  ) {}

  loadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsPageActions.enter),
      exhaustMap(() =>
        this.clientsService
          .getAll()
          .pipe(
            map((clients) =>
              ClientsApiActions.clientsLoaded({ clients })
            )
          )
      )
    )
  );

  saveClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsPageActions.saveClient),
      concatMap((action) =>
        this.clientsService
          .save(action.client)
          .pipe(
            map((client => ClientsApiActions.clientSaved({client })))
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

  // deleteBook$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(BooksPageActions.deleteBook),
  //     mergeMap(action =>
  //       this.booksService
  //         .delete(action.bookId)
  //         .pipe(
  //           map(() => BooksApiActions.bookDeleted({ bookId: action.bookId }))
  //         )
  //     )
  //   )
  // );
}
