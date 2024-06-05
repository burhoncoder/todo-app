export interface ISignInForm {
  email: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
  username: string;
  userId: number;
}
