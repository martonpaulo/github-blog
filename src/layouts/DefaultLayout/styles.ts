import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: calc(100vh - 6rem);
  margin: 0 auto 2rem auto;
`;

export const OutletContainer = styled.div`
  max-width: ${(props) => props.theme.sizes.pageWidth};
  margin: 2rem auto;
  padding: 0 1rem;

  background-color: ${(props) => props.theme.colors.baseForeground};
`;
