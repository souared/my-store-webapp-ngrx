import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/shared/models';
import { State, selectActiveOrder } from 'src/app/shared/state';
import { OrdersPageActions } from '../../actions';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  orderId!: string;
  selectedOrder$: Observable<OrderModel | null>;
  ordr!: OrderModel;
  totalOrderPrice: number = 0;
  totalGst: number = 0;
  subtotal: number = 0;

  constructor(private store: Store<State>, private route: ActivatedRoute) {
    this.selectedOrder$ = store.select(selectActiveOrder);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.orderId = params['id'];
    });

    this.store.dispatch(
      OrdersPageActions.LoadSingleOrder({ orderId: this.orderId })
    );
    // this.store.dispatch(
    //   OrdersPageActions.selectOrder({orderId: this.orderId })
    // );
    this.selectedOrder$.subscribe((x) => {
      if (x !== null) {
        this.ordr = x;

        if (this.ordr.orderDetails?.length !== 0) {
          this.ordr.orderDetails?.forEach((x) => {
            this.totalOrderPrice += x.qty * x.product.listingPrice;
            this.totalGst += x.qty * x.product.listingPrice * 0.05;
            this.subtotal = this.totalOrderPrice + this.totalGst;
          });
        }
      }
    });

    // this.totalOrderPrice = 0;
    // this.totalGst = 0;
    // this.subtotal = 0;
  }
}
