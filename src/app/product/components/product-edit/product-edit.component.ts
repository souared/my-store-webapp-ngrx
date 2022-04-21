import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriesPageActions } from 'src/app/category/actions';
import { CategoryModel, ProductModel } from 'src/app/shared/models';
import {
  State,
  selectAllcategories
} from 'src/app/shared/state';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
  originalProduct: ProductModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  categories$: Observable<CategoryModel[] | null>;

  constructor(private store: Store<State>) {
    this.categories$ = store.select(selectAllcategories);
    this.store.dispatch(CategoriesPageActions.enter());
  }
  // ngOnInit(): void {
  //   this.store.dispatch(CategoriesPageActions.enter());
  // }
  productForm = new FormGroup({
    name: new FormControl(''),
    categoryID: new FormControl(''),
    description: new FormControl(''),
  });

  @Input() set product(product: ProductModel | null) {
    this.productForm.reset();
    this.originalProduct = undefined;

    if (product) {
      this.productForm.setValue({
        name: product.name,
        categoryID: product.categoryID,
        description: product.description,
      });

      this.originalProduct = product;
    }
  }

  onSubmit(product: ProductModel) {
    this.save.emit({ ...this.originalProduct, ...product });
  }

  // changeCity(e: any) {
  //   this.originalProduct.categoryID?.setValue(e.target.value, {
  //     onlySelf: true,
  //   });
  // }
}
