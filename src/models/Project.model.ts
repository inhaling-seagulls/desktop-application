import { Tag } from "./Tag.model";

export type Project = {
  id: number | null;
  name: string;
  description: string;
  image: string;
  profile_id: number;
  tags: Tag[] | number[];
};
