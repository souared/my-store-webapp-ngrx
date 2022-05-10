import { createAction, props } from "@ngrx/store";
import { AuthenticationModel } from "src/app/shared/models";

export const enter = createAction("[Authentication Page] Enter");

export const selectAuthentication = createAction(
  "[Authentication Page] Select Authentication",
  props<{ userId: string }>()
);

export const clearSelectedAuthentication = createAction(
  "[Authentication Page] Clear Selected Authentication"
);

// export const addToShoppingItem = createAction(
//   "[Authentication Page] Add Item to Shopping Cart",
//   props<{ shoppingItem: ShoppingItemModel }>()
// );

export const saveAuthentication = createAction(
  "[Authentication Page] Save Authentication",
  props<{ authentication: AuthenticationModel }>()
);

export const deleteAuthentication = createAction(
  "[Authentication Page] Delete Item from Authentication",
  props<{ id: string }>()
);


export const deleteAllAuthentications = createAction(
  "[Authentication Page] Clear Items from Authentication"
);
