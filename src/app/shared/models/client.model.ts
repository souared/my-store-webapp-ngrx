export interface ClientModel {
  clientID: string;
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

export type ClientRequiredProps = Pick<ClientModel, "clientID" | "firstName" | "lastName">;
