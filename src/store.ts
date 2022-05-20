import { reactive, readonly } from "vue";
import { BASE_HEADERS, BASE_URI, ApiResponse } from "./constants/api";
import { User, UserSignIn } from "./models/User.model";

type Auth = {
  user: User | null;
  isLoggedIn: boolean;
  error: Error | null;
};

const auth = reactive<Auth>({
  user: null,
  isLoggedIn: false,
  error: null,
});

const signIn = (req: UserSignIn) => {
  fetch(`${BASE_URI}/login`, {
    method: "POST",
    headers: {
      ...BASE_HEADERS,
    },
    body: JSON.stringify(req),
  })
    .then((res: Response) => {
      if (res.status !== 201)
        throw new Error(`${res.status} ${res.statusText}`);
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

export default { auth: readonly(auth), signIn };
