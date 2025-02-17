import { ReactNode, useEffect, useState } from "react";

import { PostsContext } from "@/contexts/PostsContext";
import { fetchPosts, fetchPostsByQuery } from "@/services/postsService";
import { PostType } from "@/types/post";

type PostsProviderProps = {
  children: ReactNode;
};

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadPosts() {
    setLoading(true);
    try {
      const data = await fetchPosts();
      setPosts(data);
      setError(null);
    } catch {
      setError("Error fetching posts");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function searchPosts(query: string) {
    setLoading(true);
    try {
      const data = await fetchPostsByQuery(query);
      setPosts(data);
      setError(null);
    } catch {
      setError("Error searching posts");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        error,
        searchPosts,
        refreshPosts: loadPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
