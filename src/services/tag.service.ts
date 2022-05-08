import { BASE_URI } from "../constants/api";
import { Tag } from "../models/Tag.model";
//TODO :
//  Return Message Success or Error / Use try catch
export function TagService() {
  const URI = `${BASE_URI}/tags`;

  const all = async (): Promise<Tag[]> => {
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

  return { all };
}
