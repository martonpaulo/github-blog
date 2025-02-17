import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AuthorProvider } from "@/contexts/AuthorProvider";
import { PostsProvider } from "@/contexts/PostsProvider";
import { Router } from "@/Router";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <AuthorProvider>
          <PostsProvider>
            <Router />
          </PostsProvider>
        </AuthorProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
