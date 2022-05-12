import { ProductModel } from "./product.model";




export interface OrderDetailsModel {
  orderDetailsID: string;
  orderID:string;
  productID: string;
  qty: number;
  unitPrice: number;
  product: ProductModel;


}

export type OrderDetailsRequiredProps = Pick<OrderDetailsModel, "orderDetailsID" | "orderID" | "product">;
