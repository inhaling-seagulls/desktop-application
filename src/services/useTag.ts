import { BASE_URI } from "../constants/api";
//TODO :
//  Return Message Success or Error / Use try catch
export function useTag() {
  const URI = `${BASE_URI}/tags`;

  const all = async () => {
    const response = await fetch(URI);
    return response.json();
  };

  return { all };
}
