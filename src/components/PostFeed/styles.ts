import styled from "styled-components";

export const PostFeedContainer = styled.article`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.5rem;

  ${(props) => props.theme.screens.max.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
