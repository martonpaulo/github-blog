import { useLocation, useParams } from "react-router-dom";

import { usePosts } from "@/hooks/usePosts";
import { PostType } from "@/types/post";

interface PostMetaProps {
  id: "home" | "not-found" | number;
  post: PostType | null;
}

export function usePost(): PostMetaProps {
  const location = useLocation();
  const posts = usePosts((context) => context.posts);

  const { postNumber } = useParams<{ postNumber: string }>();

  const notFoundMeta: PostMetaProps = {
    id: "not-found",
    post: null,
  };

  if (location.pathname === "/") {
    return { id: "home", post: null };
  }

  if (!location.pathname.includes("/post/")) {
    return notFoundMeta;
  }

  const postId = Number(postNumber);
  const foundPost = posts.find((post) => post.number === postId);

  if (!foundPost) {
    return notFoundMeta;
  }

  return { id: foundPost.number, post: foundPost };
}
