import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { EffectsModule } from '@ngrx/effects';
import { OrdersApiEffects } from '../order/order-api-effects';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [OrderListComponent, OrderDetailsComponent, OrderPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'orders', component: OrderPageComponent },
      { path: 'order-details/:id', component: OrderDetailsComponent },
    ]),

    EffectsModule.forFeature([OrdersApiEffects]),
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
  ],
})
export class OrderModule {}
