import { AuthorType } from "@/types/author";

export type PostType = {
  number: number;
  title: string;
  user: AuthorType;
  created_at: string;
  comments: number;
  body: string;
};
