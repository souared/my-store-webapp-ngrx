import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
