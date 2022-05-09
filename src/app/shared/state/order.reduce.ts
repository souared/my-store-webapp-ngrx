import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { OrderModel } from 'src/app/shared/models';
import {
  OrdersPageActions,
  OrdersApiActions,
} from 'src/app/order/actions';

export interface State extends EntityState<OrderModel> {
  orderID: string | null;
}

export const adapter = createEntityAdapter<OrderModel>({
  selectId:order => order.orderID
});

export const initialState: State = adapter.getInitialState({
  orderID: null,
});

export const ordersReducer = createReducer(
  initialState,
  on(
    OrdersPageActions.clearSelectedOrder,
    OrdersPageActions.enter,
    (state) => {
      return {
        ...state,
        orderID: null,
      };
    }
  ),
  on(OrdersPageActions.selectOrder, (state, action) => {
    return {
      ...state,
      orderID: action.orderId,
    };
  }),
  on(OrdersApiActions.ordersLoaded, (state, action) => {
    return adapter.setAll(action.orders, state);
  }),
  on(OrdersApiActions.orderSaved, (state, action) => {
    return adapter.upsertOne(action.order,state);
  }),
  on(OrdersApiActions.orderDeleted, (state, action) => {
    return adapter.removeOne(action.orderId, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return ordersReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveOrderId = (state: State) => state.orderID;
export const selectActiveOrder = createSelector(
  selectEntities,
  selectActiveOrderId,
  (ordersEntities, orderID) => {
    return orderID ? ordersEntities[orderID]! : null;
  }
);
