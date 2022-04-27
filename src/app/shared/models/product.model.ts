import { DecimalPipe } from '@angular/common';

export interface ProductModel {
  productID: string;
  categoryID: string;
  category: string;
  name: string;
  description: string;
  photoUrl: string;
  stockQty: number;
  unitCost: number;
  listingPrice: number;
  createdBy: string;
  createdOn: Date;
  updatedBy: string;
  updatedOn: Date;
  user: string;
  active: boolean;
}

export type ProductRequiredProps = Pick<ProductModel, 'productID' | 'name'>;
