import { Tag } from "./Tag.model";

export type Profile = {
  pseudo: string;
  contact: string;
  tags: Tag[] | number[];
  id?: number;
};
