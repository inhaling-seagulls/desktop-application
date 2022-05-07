import { BASE_URI } from "../constants/api";
import { Project } from "../models/Project.model";
//TODO :
//  Return Message Success or Error / Use try catch
export function useProject() {
  const URI = `${BASE_URI}/projects`;

  const all = async () => {
    const response = await fetch(URI);
    return response.json();
  };

  const find = async (id: number) => {
    const response = await fetch(`${URI}/${id}`);
    return response.json();
  };

  const store = async (body: Project) => {
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

  const update = async (id: number, body: Project) => {
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

  return { all, find, store, update, destroy };
}
