import { ProductModule } from "src/app/product";




export interface OrderDetailsModel {
  orderDetailsID: string;
  orderID:string;
  productID: string;
  qty: number;
  unitPrice: number;
  product: ProductModule;


}

export type OrderDetailsRequiredProps = Pick<OrderDetailsModel, "orderDetailsID" | "orderID" | "product">;
