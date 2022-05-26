import { Tag } from "./Tag.model";

export type Project = {
  name: string;
  description: string;
  image: string;
  profile_id: number;
  tags: Tag[];
  id?: number;
  score?: number;
};
