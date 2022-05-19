import { Project } from "./Project.model";
import { Tag } from "./Tag.model";

export type Profile = {
  pseudo: string;
  contact: string;
  tags: Tag[] | number[];
  projects?: Project[];
  id?: number;
};
