import { Context, useContextSelector } from "use-context-selector";

import { AuthorContext, AuthorContextType } from "@/contexts/AuthorContext";

export function useAuthor<T>(selector: (context: AuthorContextType) => T): T {
  const selected = useContextSelector(
    AuthorContext as Context<AuthorContextType>,
    selector
  );
  const fullContext = useContextSelector(AuthorContext, (c) => c);

  if (!fullContext) {
    throw new Error("useAuthor must be used within a AuthorProvider");
  }

  return selected;
}
