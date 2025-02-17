import styled from "styled-components";

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.baseBorder};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
  }
`;

export const Bio = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.baseSpan};
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  margin-top: 1rem;

  font-size: 0.875rem;

  ${(props) => props.theme.screens.sm} {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

export const SocialItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.baseSpan};
  }

  &:hover {
    span {
      color: ${(props) => props.theme.colors.blue};
      text-decoration: underline;
    }

    svg {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;
