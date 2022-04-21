import { createAction, props } from '@ngrx/store';
import { ClientModel } from 'src/app/shared/models';

export const clientsLoaded = createAction(
  '[Clients API] Clients Loaded Success',
  props<{ clients: ClientModel[] }>()
);

export const clientSaved = createAction(
  '[Clients API] Client Saved',
  props<{ client: ClientModel }>()
);


export const clientDeleted = createAction(
  '[Clients API] Client Deleted',
  props<{ clientId: string }>()
);
