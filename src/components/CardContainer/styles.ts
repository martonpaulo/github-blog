import styled from "styled-components";

interface CardWrapperProps {
  $hasBorderBottom?: boolean;
}

export const CardWrapper = styled.aside<CardWrapperProps>`
  background-color: ${(props) => props.theme.colors.baseProfile};
  padding: 1rem;
  border-top-right-radius: ${(props) => props.theme.sizes.borderRadius};
  border-top-left-radius: ${(props) => props.theme.sizes.borderRadius};
  border-bottom-right-radius: ${(props) =>
    props.$hasBorderBottom && props.theme.sizes.borderRadius};
  border-bottom-left-radius: ${(props) =>
    props.$hasBorderBottom && props.theme.sizes.borderRadius};

  border: 1px solid ${(props) => props.theme.colors.baseBorder};
  display: flex;
  align-items: center;
  gap: 1.5rem;

  ${(props) => props.theme.screens.max.md} {
    flex-direction: column;
    gap: 1rem;
  }
`;
