import Markdown from "react-markdown";
import styled from "styled-components";

export const PostBodyWrapper = styled.div`
  padding: 1.25rem 2rem 1.25rem;
  border: 1px solid ${(props) => props.theme.colors.baseBorder};
  border-top: none;
  border-bottom-right-radius: ${(props) => props.theme.sizes.borderRadius};
  border-bottom-left-radius: ${(props) => props.theme.sizes.borderRadius};
`;

export const MarkdownContent = styled(Markdown)`
  /* Headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 {
    font-size: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.baseBorder};
    padding-bottom: 0.3em;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  /* Paragraphs */
  p {
    margin-bottom: 1rem;
  }

  /* Links */
  a {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Blockquotes */
  blockquote {
    margin: 1rem 0;
    padding: 0.5rem 1rem 0.2rem;
    background-color: ${(props) => props.theme.colors.baseCard};
    border-left: 2px solid ${(props) => props.theme.colors.baseBorder};
  }

  /* Inline code */
  code {
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 0.9rem;
    padding: 0.2em 0.4em;
    background-color: ${(props) => props.theme.colors.baseCard};
  }

  /* Code blocks */
  pre {
    margin: 1rem 0;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.baseCard};
    overflow-x: auto;
    font-size: 0.9rem;
    line-height: 1.45;
  }

  /* Horizontal rules */
  hr {
    border: none;
    border-top: 1px solid ${(props) => props.theme.colors.baseBorder};
    margin: 1.5rem 0;
  }

  /* Lists */
  ul,
  ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
