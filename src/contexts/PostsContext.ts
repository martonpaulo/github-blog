import { createContext } from "use-context-selector";

import { PostType } from "@/types/post";

export interface PostsContextType {
  posts: PostType[];
  loading: boolean;
  error: string | null;
  searchPosts: (query: string) => Promise<void>;
  refreshPosts: () => Promise<void>;
}

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  loading: false,
  error: null,
  searchPosts: async () => {},
  refreshPosts: async () => {},
});
