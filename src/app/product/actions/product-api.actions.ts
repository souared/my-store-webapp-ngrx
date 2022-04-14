import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/shared/models';

export const productsLoaded = createAction(
  '[Products API] Products Loaded Success',
  props<{ products: ProductModel[] }>()
);

export const productSaved = createAction(
  '[Products API] Product Saved',
  props<{ product: ProductModel }>()
);
