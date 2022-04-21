import { createAction, props } from "@ngrx/store";
import { ClientRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Clients Page] Enter");

export const selectClient = createAction(
  "[Client Page] Select Client",
  props<{ clientId: string }>()
);

export const clearSelectedClient = createAction(
  "[Clients Page] Clear Selected Client"
);

export const saveClient = createAction(
  "[Clients Page] Save Client",
  props<{ client: ClientRequiredProps }>()
);

export const deleteClient = createAction(
  "[Clients Page] Delete Client",
  props<{ clientId: string }>()
);
