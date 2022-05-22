export type User = {
  name: string;
  email: string;
  id?: number;
  token?: string;
};

export type UserRegistration = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type UserSignIn = {
  email: string;
  password: string;
};
