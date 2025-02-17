import { createContext } from "use-context-selector";

import { AuthorType } from "@/types/author";

export interface AuthorContextType {
  author: AuthorType | null;
  loading: boolean;
  error: string | null;
}

export const AuthorContext = createContext<AuthorContextType>({
  author: null,
  loading: false,
  error: null,
});
