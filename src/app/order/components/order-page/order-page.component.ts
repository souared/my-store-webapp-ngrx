import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  State,
  selectAllorders,
  selectActiveOrder,
} from 'src/app/shared/state';

import { OrderModel, OrderRequiredProps } from 'src/app/shared/models';
import { OrdersPageActions } from '../../actions';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  orders$: Observable<OrderModel[] | null>;
  currentOrder$: Observable<OrderModel | null>;

  constructor(private store: Store<State>) {
    this.orders$ = store.select(selectAllorders);
    this.currentOrder$ = store.select(selectActiveOrder);
  }

  ngOnInit(): void {
    this.store.dispatch(OrdersPageActions.enter());
  }

  onSelect(order: OrderModel) {
    this.store.dispatch(
      OrdersPageActions.selectOrder({ orderId: order.orderID})
    );
  }

  onCancel() {
    this.removeSelectedOrder();
  }


  onSave(order: OrderRequiredProps | OrderModel) {
    this.saveOrder(order);
  }

  removeSelectedOrder() {
    this.store.dispatch(OrdersPageActions.clearSelectedOrder());
  }

  saveOrder(orderProps: OrderRequiredProps) {
    this.store.dispatch(OrdersPageActions.saveOrder({ order: orderProps }));
  }

}
