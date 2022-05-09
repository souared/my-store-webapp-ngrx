import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { EffectsModule } from '@ngrx/effects';
import { ClientsApiEffects } from '../client/client-api-effects';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "orders", component: OrderListComponent }]),
    EffectsModule.forFeature([ClientsApiEffects]),
  ]
})
export class OrderModule { }
