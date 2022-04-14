import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  State,
  selectAllcategories,
  selectActiveCategory
} from "src/app/shared/state";

import { CategoryModel, CategoryRequiredProps } from "src/app/shared/models";
import { CategoriesPageActions } from "../../actions";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<CategoryModel[]>;
  currentCategory$: Observable<CategoryModel | null>;


  constructor(private store:Store<State>) {
    this.categories$ = store.select(selectAllcategories);
    this.currentCategory$ = store.select(selectActiveCategory);
  }

  ngOnInit(): void {
    this.store.dispatch(CategoriesPageActions.enter());
  }

}
