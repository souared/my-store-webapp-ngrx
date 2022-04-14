export interface ClientModel {
  clientID: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  createdBy: string;
  createdOn: Date;
  updatedBy: string;
  updatedOn: Date;
  user: string;
  active: boolean;
}

export type ClientRequiredProps = Pick<ClientModel, "firstName" |"lastName">;
