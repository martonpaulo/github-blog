import styled from "styled-components";

export const PostMetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  p {
    color: ${(props) => props.theme.colors.baseSpan};
  }
`;
