import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModel } from "src/app/shared/models";

import { Store } from '@ngrx/store';
import {
  State,
  selectActiveOrder,
} from 'src/app/shared/state';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent  {
  @Input() orders!: OrderModel[] | null;
  @Input() readonly = false;
  @Output() select = new EventEmitter();

  currentOrder$: Observable<OrderModel | null>;
  orderIDToDelete: string = "" as string;

  constructor(private store: Store<State>,private modalService: NgbModal ) {
    this.currentOrder$ = store.select(selectActiveOrder);
    this.currentOrder$.subscribe((selectedOrder) => {
      if(selectedOrder!=null)
      {
      this.orderIDToDelete = selectedOrder.orderID;
    }});
  }

}
