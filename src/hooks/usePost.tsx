import { useLocation, useParams } from "react-router-dom";

import { posts } from "@/data/posts";

export function usePost() {
  const path = useLocation().pathname;
  const { postId } = useParams<{ postId: string }>();

  if (path === "/") {
    return { id: "home", post: null };
  }

  if (!path.includes("/post/")) {
    return { id: "not-found", post: null };
  }

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return { id: "not-found", post: null };
  }

  return { id: postId, post };
}
