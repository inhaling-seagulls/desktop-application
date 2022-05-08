import { BASE_URI } from "../constants/api";
import { Project } from "../models/Project.model";
//TODO :
//  Return Message Success or Error / Use try catch
export function ProjectService() {
  const URI = `${BASE_URI}/projects`;

  const all = async (): Promise<Project[]> => {
    const request = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(URI, request);
    return response.json();
  };

  const find = async (id: number): Promise<Project> => {
    const request = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${URI}/${id}`, request);
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
