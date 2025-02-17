import { Link } from "react-router";
import styled from "styled-components";

export const PostPreviewContainer = styled(Link)`
  padding: 1rem;

  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.baseBorder};

  background-color: ${(props) => props.theme.colors.baseInput};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    border-color: ${(props) => props.theme.colors.baseLabel};
    transition: border-color 0.1s;
    cursor: pointer;
  }
`;

export const PostTitle = styled.h3`
  color: ${(props) => props.theme.colors.baseTitle};
  line-height: 1;
`;

export const PostDate = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.baseSubtitle};
`;

export const PostBody = styled.p`
  margin-top: 0.5rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.baseSubtitle};
`;
