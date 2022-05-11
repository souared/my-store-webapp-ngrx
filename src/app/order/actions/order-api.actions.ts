import { createAction, props } from '@ngrx/store';
import { OrderModel } from 'src/app/shared/models';

export const ordersLoaded = createAction(
  '[Orders API] Orders Loaded Success',
  props<{ orders: OrderModel[] }>()
);
export const singleOrderLoaded = createAction(
  '[Orders API] Single Order Loaded Success',
  props<{ order: OrderModel }>()
);

export const orderSaved = createAction(
  '[Orders API] Order Saved',
  props<{ order: OrderModel }>()
);


export const orderDeleted = createAction(
  '[Orders API] Order Deleted',
  props<{ orderId: string }>()
);
