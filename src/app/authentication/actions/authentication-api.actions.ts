import { createAction, props } from '@ngrx/store';
import { AuthenticationModel } from 'src/app/shared/models';

export const authenticationLoaded = createAction(
  '[Authentication Storage] User Loaded Success',
  props<{ authentications: AuthenticationModel[] }>()
);

export const authenticationSaved = createAction(
  '[Authentication Storage] authentication Saved',
  props<{ authentication: AuthenticationModel }>()
);

export const authenticationDeleted = createAction(
  '[Authentication Storage] authentication Deleted',
  props<{ id: string }>()
);


export const authenticationCleared = createAction(
  '[Authentication Storage] authentication Cleared'
);


