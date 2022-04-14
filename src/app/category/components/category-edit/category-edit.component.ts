import { Component, EventEmitter, Input,  Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CategoryModel } from "src/app/shared/models";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {

  originalCategory: CategoryModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();


  categoryForm = new FormGroup({
    categoryName: new FormControl(""),
    categoryDescription: new FormControl("")
  });

  @Input() set category(category: CategoryModel|null) {
    this.categoryForm.reset();
    this.originalCategory = undefined;

    if (category) {
      this.categoryForm.setValue({
        categoryName: category.categoryName,
        categoryDescription: category.categoryDescription
      });

      this.originalCategory = category;
    }
  }

  onSubmit(category: CategoryModel) {
    this.save.emit({ ...this.originalCategory, ...category });
  }

}
