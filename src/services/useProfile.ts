import { BASE_URI } from "../constants/api";
import { Profile } from "../models/Profile.model";
//TODO :
//  Return Message Success or Error / Use try catch
export function useProfile() {
  const URI = `${BASE_URI}/profiles`;

  const find = async (id: number) => {
    const response = await fetch(`${URI}/${id}`);
    return response.json();
  };

  const store = async (body: Profile) => {
    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(URI, request);
  };

  const update = async (id: number, body: Profile) => {
    const request = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(`${URI}/${id}`, request);
  };

  const destroy = async (id: number) => {
    const request = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(`${URI}/${id}`, request);
  };

  return { find, store, update, destroy };
}
