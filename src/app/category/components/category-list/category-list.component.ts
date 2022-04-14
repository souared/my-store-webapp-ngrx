import { Component, Input } from '@angular/core';
import { CategoryModel } from "src/app/shared/models";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent  {
  @Input() categories!: CategoryModel[] | null;
  @Input() readonly = false;
 // @Output() select = new EventEmitter();

}
