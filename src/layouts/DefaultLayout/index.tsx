import { Outlet } from "react-router-dom";

import { AppHeader } from "@/components/AppHeader";
import {
  LayoutContainer,
  OutletContainer,
} from "@/layouts/DefaultLayout/styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <AppHeader />

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  );
}
