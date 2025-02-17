import { ReactNode, useEffect, useState } from "react";

import { AuthorContext } from "@/contexts/AuthorContext";
import { fetchAuthor } from "@/services/authorService";
import { AuthorType } from "@/types/author";

type AuthorProviderProps = {
  children: ReactNode;
};

export function AuthorProvider({ children }: AuthorProviderProps) {
  const [author, setAuthor] = useState<AuthorType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAuthor() {
      try {
        const data = await fetchAuthor();
        setAuthor(data);
      } catch {
        setError("Error fetching author data");
      } finally {
        setLoading(false);
      }
    }
    loadAuthor();
  }, []);

  return (
    <AuthorContext.Provider value={{ author, loading, error }}>
      {children}
    </AuthorContext.Provider>
  );
}
