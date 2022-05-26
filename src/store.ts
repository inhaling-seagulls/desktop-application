import { reactive, readonly } from "vue";
import { BASE_HEADERS, BASE_URI } from "./constants/api";
import { ApiResponse } from "./models/ApiResponse.model";
import { User, UserRegistration, UserSignIn } from "./models/User.model";

export type Store = {
  auth: Auth;
  signIn: (user: UserSignIn, callback?: () => void) => void;
  signUp: (user: UserRegistration, callback?: () => void) => void;
  signOut: (callback?: () => void) => void;
  getToken: () => string;
  fetchMyData: (callback: () => void) => void;
};

export type Auth = {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  error: Error | null;
};

const auth = reactive<Auth>({
  user: null,
  token: null,
  isLoggedIn: false,
  error: null,
});

const getToken = (): string => `Bearer ${auth.token}`;

const signIn = (req: UserSignIn, callback?: () => void) => {
  fetch(`${BASE_URI}/login`, {
    method: "POST",
    headers: {
      ...BASE_HEADERS,
    },
    body: JSON.stringify(req),
  })
    .then((res: Response) => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((json: ApiResponse<Auth>) => {
      auth.token = json.data.token;
      auth.isLoggedIn = true;
      console.log("IN");
      console.log(auth);
      if (callback !== undefined) callback();
    })
    .catch((e: Error) => {
      auth.error = e;
    });
};

const signUp = (req: UserRegistration, callback?: () => void) => {
  fetch(`${BASE_URI}/register`, {
    method: "POST",
    headers: {
      ...BASE_HEADERS,
    },
    body: JSON.stringify(req),
  })
    .then((res: Response) => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((json: ApiResponse<Auth>) => {
      auth.token = json.data.token;
      auth.isLoggedIn = true;
      if (callback !== undefined) callback();
    })
    .catch((e: Error) => {
      auth.error = e;
    });
};

const signOut = (callback?: () => void) => {
  fetch(`${BASE_URI}/logout`, {
    method: "GET",
    headers: {
      ...BASE_HEADERS,
      Authorization: getToken(),
    },
  })
    .then((res: Response) => {
      if (res.status !== 204) throw new Error(`${res.status} ${res.statusText}`);
      auth.user = null;
      auth.isLoggedIn = false;
      if (callback !== undefined) callback();
    })
    .catch((e: Error) => {
      auth.error = e;
    });
};

const fetchMyData = (callback: () => void) => {
  console.log(getToken());
  fetch(`${BASE_URI}/me`, {
    method: "GET",
    headers: {
      ...BASE_HEADERS,
      Authorization: getToken(),
    },
  })
    .then((res: Response) => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((json: ApiResponse<User>) => {
      auth.user = json.data;
      auth.isLoggedIn = true;
      console.log("DATA");
      console.log(auth);
      callback()
    })
    .catch((e: Error) => {
      auth.error = e;
    });
};

export default { auth: readonly(auth), getToken, signIn, signOut, signUp, fetchMyData };
