import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ProductModel } from "src/app/shared/models";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent  {
  originalProduct: ProductModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  productForm = new FormGroup({
    name: new FormControl(""),
    categoryID: new FormControl(""),
    description: new FormControl("")
  });

  @Input() set product(product: ProductModel|null) {
    this.productForm.reset();
    this.originalProduct = undefined;

    if (product) {
      this.productForm.setValue({
        name: product.name,
        categoryID : product.categoryID,
        description: product.description
      });

      this.originalProduct = product;
    }
  }

  onSubmit(product: ProductModel) {
    this.save.emit({ ...this.originalProduct, ...product });
  }

}
