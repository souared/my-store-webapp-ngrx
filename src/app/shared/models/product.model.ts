export interface ProductModel {
  productID: number;
  categoryID: number;
  name: string;
  description: string;
  photoUrl: string;
  createdBy: string;
  createdOn: Date;
  updatedBy: string;
  updatedOn: Date;
  user: string;
  active: boolean;
}

export type ProductRequiredProps = Pick<ProductModel, "name">;
