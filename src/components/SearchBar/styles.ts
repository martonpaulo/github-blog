import styled from "styled-components";

export const SearchBarContainer = styled.div`
  margin-top: 0.5rem;
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;

  width: 1.75rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.baseSpan};
  font-size: 0.875rem;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  padding: 0.5rem;

  border-radius: ${(props) => props.theme.sizes.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.baseBorder};

  background-color: ${(props) => props.theme.colors.baseForeground};
  color: ${(props) => props.theme.colors.white};

  padding-left: 1.75rem;

  font-size: 0.875rem;
`;

export const CustomPlaceholder = styled.div`
  position: absolute;
  top: 50%;
  left: 1.75rem;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${(props) => props.theme.colors.baseSpan};
  font-size: 0.875rem;
`;

export const SlashBox = styled.span`
  border: 1px solid ${(props) => props.theme.colors.baseBorder};
  border-radius: 4px;

  height: 1rem;
  width: 1rem;
  font-size: 0.75rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin: 0 0.1rem;
  padding-bottom: 0.1rem;
`;
