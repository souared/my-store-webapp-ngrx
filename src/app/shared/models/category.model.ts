export interface CategoryModel {
  categoryID: string;
  categoryName: string;
  categoryDescription: string;
  createdBy: string;
  createdOn: Date;
  updatedBy: string;
  updatedOn: Date;
  user: string;
  active: boolean;


}

export type CategoryRequiredProps = Pick<CategoryModel, "categoryID"|"categoryName">;
