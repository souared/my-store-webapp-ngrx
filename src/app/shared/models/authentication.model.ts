export interface AuthenticationModel {
  userID: string;
  email: string;
  token:string;
}

export type UserRequiredProps = Pick<AuthenticationModel, "userID" | "email" | "token">;
