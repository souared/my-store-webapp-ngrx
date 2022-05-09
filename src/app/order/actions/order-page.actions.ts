import { createAction, props } from "@ngrx/store";
import { OrderRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Orders Page] Enter");

export const selectOrder = createAction(
  "[Order Page] Select Order",
  props<{ orderId: string }>()
);

export const clearSelectedOrder = createAction(
  "[Orders Page] Clear Selected Order"
);

export const saveOrder = createAction(
  "[Orders Page] Save Order",
  props<{ order: OrderRequiredProps }>()
);

export const deleteOrder = createAction(
  "[Orders Page] Delete Order",
  props<{ orderId: string }>()
);
