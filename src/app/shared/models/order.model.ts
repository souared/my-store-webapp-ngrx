import { ClientModel, OrderDetailsModel } from '.';

export interface OrderModel {
  orderID: string;
  clientID: string;
  orderDate: Date;
  orderStatus: string;
  client: ClientModel;
  orderDetails: OrderDetailsModel[];
}

export type OrderRequiredProps = Pick<
  OrderModel,
  | 'orderID'
  | 'clientID'
  | 'orderDate'
  | 'orderStatus'
  | 'client'
  | 'orderDetails'
>;
