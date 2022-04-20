import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModel, CategoryRequiredProps } from "src/app/shared/models";

import { Store } from '@ngrx/store';
import {
  State,
  selectAllcategories,
  selectActiveCategory,
} from 'src/app/shared/state';
import { CategoriesPageActions } from '../../actions';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent  {
  @Input() categories!: CategoryModel[] | null;
  @Input() readonly = false;
  @Output() select = new EventEmitter();

  currentCategory$: Observable<CategoryModel | null>;

  constructor(private store: Store<State>,private modalService: NgbModal) {
    this.currentCategory$ = store.select(selectActiveCategory);
  }





  onCancel() {
    this.removeSelectedCategory();
    this.modalService.dismissAll();
  }


  onSave(category: CategoryRequiredProps | CategoryModel) {
    this.saveCategory(category);
    this.removeSelectedCategory();
    this.modalService.dismissAll();
  }

  removeSelectedCategory() {
    this.store.dispatch(CategoriesPageActions.clearSelectedCategory());
  }

  saveCategory(categoryProps: CategoryRequiredProps) {
    this.store.dispatch(CategoriesPageActions.saveCategory({ category: categoryProps }));
  }


  closeResult = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
