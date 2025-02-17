import { api } from "@/services/api";
import { PostType } from "@/types/post";

const USER = import.meta.env.VITE_USER;
const REPOSITORY = import.meta.env.VITE_REPOSITORY;
const REPO_ISSUES_ENDPOINT = `/repos/${USER}/${REPOSITORY}/issues`;
const SEARCH_ISSUES_ENDPOINT = `/search/issues`;

async function getResponse<T>(url: string, params = {}): Promise<T> {
  const { data } = await api.get<T>(url, { params });
  return data;
}

export async function fetchPosts(): Promise<PostType[]> {
  return await getResponse<PostType[]>(REPO_ISSUES_ENDPOINT);
}

export async function fetchPostsByQuery(query: string): Promise<PostType[]> {
  if (!query) return fetchPosts();

  const params = {
    q: `${query} repo:${USER}/${REPOSITORY}`,
  };
  const data = await getResponse<{ items: PostType[] }>(
    SEARCH_ISSUES_ENDPOINT,
    params
  );
  return data.items;
}
