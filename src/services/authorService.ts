import { api } from "@/services/api";
import { AuthorType } from "@/types/author";

const USER = import.meta.env.VITE_USER;
const USER_ENDPOINT = `/users/${USER}`;

export async function fetchAuthor(): Promise<AuthorType> {
  const response = await api.get<AuthorType>(USER_ENDPOINT);
  return response.data;
}
