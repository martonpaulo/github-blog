import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Router } from "@/Router";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
