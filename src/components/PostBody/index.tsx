import { MarkdownContent, PostBodyWrapper } from "@/components/PostBody/styles";

interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <PostBodyWrapper>
      <MarkdownContent>{content}</MarkdownContent>
    </PostBodyWrapper>
  );
}
