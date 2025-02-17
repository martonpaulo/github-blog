import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.baseBackground};
  height: 4rem;
  padding: 0 1rem;

  img {
    height: 1.875rem;
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.baseBorder};
`;

interface PathProps {
  $highlight?: boolean;
}

export const Path = styled(Link)<PathProps>`
  font-size: 0.875rem;
  padding: 0.375rem 0.5rem;
  font-weight: ${(props) => (props.$highlight ? "bold" : "normal")};
  border-radius: ${(props) => props.theme.sizes.borderRadius};

  &:hover {
    background-color: ${(props) => props.theme.colors.baseHover};
    transition: background-color 0.1s;
  }
`;

export const Slash = styled.span`
  color: ${(props) => props.theme.colors.baseSubtitle};
`;
