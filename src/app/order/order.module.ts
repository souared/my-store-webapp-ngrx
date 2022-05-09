import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { EffectsModule } from '@ngrx/effects';
import { OrdersApiEffects } from '../order/order-api-effects';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './components/order-page/order-page.component';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailsComponent,
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "orders", component: OrderPageComponent }]),
    EffectsModule.forFeature([OrdersApiEffects]),
  ]
})
export class OrderModule { }
