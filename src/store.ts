import { reactive, readonly } from "vue";
import { BASE_HEADERS, BASE_URI } from "./constants/api";
import { ApiResponse } from "./models/ApiResponse.model";
import { User, UserRegistration, UserSignIn } from "./models/User.model";

export type Store = {
  auth: Auth;
  signIn: (user: UserSignIn) => void;
  signUp: (user: UserRegistration) => void;
  signOut: () => void;
  getToken: () => string | undefined;
};

export type Auth = {
  user: User | null;
  isLoggedIn: boolean;
  error: Error | null;
};

const auth = reactive<Auth>({
  user: null,
  isLoggedIn: false,
  error: null,
});

const getToken = () => auth.user?.token;

const signIn = (req: UserSignIn) => {
  fetch(`${BASE_URI}/login`, {
    method: "POST",
    headers: {
      ...BASE_HEADERS,
    },
    body: JSON.stringify(req),
  })
    .then((res: Response) => {
      if (res.status !== 201) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((json: ApiResponse<User>) => {
      auth.user = json.data;
      auth.isLoggedIn = true;
    })
    .catch((e: Error) => {
      auth.error = e;
    });
};

const signUp = (req: UserRegistration) => {
  fetch(`${BASE_URI}/register`, {
    method: "POST",
    headers: {
      ...BASE_HEADERS,
    },
    body: JSON.stringify(req),
  })
    .then((res: Response) => {
      if (res.status !== 201) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((json: ApiResponse<User>) => {
      auth.user = json.data;
      auth.isLoggedIn = true;
    })
    .catch((e: Error) => {
      auth.error = e;
    });
};

const signOut = () => {
  fetch(`${BASE_URI}/logout`, {
    method: "GET",
    headers: {
      ...BASE_HEADERS,
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res: Response) => {
      if (res.status !== 204) throw new Error(`${res.status} ${res.statusText}`);
      auth.user = null;
      auth.isLoggedIn = false;
    })
    .catch((e: Error) => {
      auth.error = e;
    });
};

export default { auth: readonly(auth), signIn, signOut, signUp, getToken };
