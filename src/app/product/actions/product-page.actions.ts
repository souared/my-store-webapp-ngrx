import { createAction, props } from "@ngrx/store";
import { ProductRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Products Page] Enter");

export const selectProduct = createAction(
  "[Product Page] Select Product",
  props<{ productId: string }>()
);

export const clearSelectedProduct = createAction(
  "[Products Page] Clear Selected Product"
);

export const saveProduct = createAction(
  "[Products Page] Save Product",
  props<{ product: ProductRequiredProps }>()
);

export const deleteProduct = createAction(
  "[Products Page] Delete Product",
  props<{ productId: string }>()
);
