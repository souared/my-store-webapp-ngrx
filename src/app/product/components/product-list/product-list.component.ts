import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel, ProductRequiredProps } from "src/app/shared/models";

import { Store } from '@ngrx/store';
import {
  State,
  selectActiveProduct,
} from 'src/app/shared/state';
import { ProductsPageActions } from '../../actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  {

  @Input() products!: ProductModel[] | null;
  @Input() readonly = false;
  @Output() select = new EventEmitter();

  currentProduct$: Observable<ProductModel | null>;

  constructor(private store: Store<State>,private modalService: NgbModal) {
    this.currentProduct$ = store.select(selectActiveProduct);
  }



  onCancel() {
    this.removeSelectedProduct();
    this.modalService.dismissAll();
  }


  onSave(product: ProductRequiredProps | ProductModel) {
    this.saveProduct(product);
    this.removeSelectedProduct();
    this.modalService.dismissAll();
  }

  removeSelectedProduct() {
    this.store.dispatch(ProductsPageActions.clearSelectedProduct());
  }

  saveProduct(productProps: ProductRequiredProps) {
    this.store.dispatch(ProductsPageActions.saveProduct({ product: productProps }));
  }


  closeResult = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-product-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
