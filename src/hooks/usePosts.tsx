import { Context, useContextSelector } from "use-context-selector";

import { PostsContext, PostsContextType } from "@/contexts/PostsContext";

export function usePosts<T>(selector: (context: PostsContextType) => T): T {
  const selected = useContextSelector(
    PostsContext as Context<PostsContextType>,
    selector
  );
  const fullContext = useContextSelector(PostsContext, (c) => c);

  if (!fullContext) {
    throw new Error("usePosts must be used within a PostsProvider");
  }

  return selected;
}
