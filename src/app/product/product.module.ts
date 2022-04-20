import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ProductsApiEffects } from './product-api-effects';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "products", component: ProductsPageComponent }]),
    EffectsModule.forFeature([ProductsApiEffects]),
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class ProductModule { }
