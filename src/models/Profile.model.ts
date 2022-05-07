import { Tag } from "./Tag.model";

export type Profile = {
  id: number | null;
  pseudo: string;
  contact: string;
  tags: Tag[] | number[];
};
