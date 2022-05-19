import { reactive, readonly } from "vue";

type Auth = {
  user: any;
  isLoggedIn: boolean;
  error: any;
};

const auth = reactive<Auth>({
  user: null,
  isLoggedIn: false,
  error: null,
});

const signIn = (req: { email: string; password: string }) => {
  fetch("http://localhost:8000/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      if (res.status !== 201) throw res.statusText;
      return res.json();
    })
    .then((json) => {
      console.log(json.data);
      auth.user = json.data;
      auth.isLoggedIn = true;
    })
    .catch((e) => {
      auth.error = e;
    });
};

export default { auth: readonly(auth), signIn };
