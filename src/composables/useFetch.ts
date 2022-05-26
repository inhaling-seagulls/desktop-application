import { inject, Ref, ref } from "vue";
import { BASE_HEADERS, BASE_URI } from "../constants/api";
import { ApiResponse } from "../models/ApiResponse.model";
import { Store } from "../store";

export type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export const useFetch = <T>(endpoint: string, method: Method = "GET", body?: T) => {
  const data: Ref<T | null> = ref(null);
  const response: Ref<ApiResponse<T> | null> = ref(null);
  const error: Ref<Error | null> = ref(null);
  const loading: Ref<boolean> = ref(false);

  const store = inject<Store>("store");

  const run = async () => {
    loading.value = true;

    fetch(`${BASE_URI}/${endpoint}`, {
      method: method,
      headers: {
        ...BASE_HEADERS,
        Authorization: `${store?.getToken()}`,
      },
      body: body ? JSON.stringify(body) : null,
    })
      .then((res: Response) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((json: ApiResponse<T>) => {
        response.value = json;
        data.value = json.data;
      })
      .catch((e: Error) => (error.value = e))
      .finally(() => (loading.value = false));
  };

  if (method === "GET") run();

  return { data, response, error, loading, run };
};
