import { Component, OnInit } from '@angular/core';
import {
  State,
  selectAllproducts,
  selectActiveProduct,
} from 'src/app/shared/state';

import { ProductModel, ProductRequiredProps } from 'src/app/shared/models';
import { ProductsPageActions } from '../../actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<ProductModel[] | null>;
  currentProduct$: Observable<ProductModel | null>;

  constructor(private store: Store<State>) {
    this.products$ = store.select(selectAllproducts);
    this.currentProduct$ = store.select(selectActiveProduct);
  }

  ngOnInit(): void {
    this.store.dispatch(ProductsPageActions.enter());
  }

  onSelect(product: ProductModel) {
    this.store.dispatch(
      ProductsPageActions.selectProduct({ productId: product.productID })
    );
  }

  onCancel() {
    this.removeSelectedProduct();
  }

  onSave(product: ProductRequiredProps | ProductModel) {
    this.saveProduct(product);
  }

  removeSelectedProduct() {
    this.store.dispatch(ProductsPageActions.clearSelectedProduct());
  }

  saveProduct(productProps: ProductRequiredProps) {
    this.store.dispatch(
      ProductsPageActions.saveProduct({ product: productProps })
    );
  }
}
