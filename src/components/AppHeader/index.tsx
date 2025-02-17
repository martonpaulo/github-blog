import { Link } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { HeaderContainer, Path, Slash } from "@/components/AppHeader/styles";
import { usePost } from "@/hooks/usePost";

export function AppHeader() {
  const { id } = usePost();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="GitHub logo" />
      </Link>

      <Path to="/" $highlight={id === "home"}>
        GitHub Blog
      </Path>

      {id !== "home" && (
        <>
          <Slash>/</Slash>
          <Path to={`/post/${id}`} $highlight>
            {id !== "not-found" ? `Post ${id}` : "Not Found"}
          </Path>
        </>
      )}
    </HeaderContainer>
  );
}
