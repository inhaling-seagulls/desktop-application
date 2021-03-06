import { Profile } from "./Profile.model";

export type User = {
  name: string;
  email: string;
  profile: Profile;
  id?: number;
  token?: string;
  profile: Profile;
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
