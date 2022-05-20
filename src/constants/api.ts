export const BASE_URI = "http://localhost:8000/api";

export const BASE_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type ApiResponse<T> = {
  data: T;
  links?: Object;
  meta?: Object;
};
