import { MarkdownContent, PostBodyWrapper } from "@/components/PostBody/styles";

interface PostBodyProps {
  body: string;
}

export function PostBody({ body }: PostBodyProps) {
  return (
    <PostBodyWrapper>
      <MarkdownContent>{body}</MarkdownContent>
    </PostBodyWrapper>
  );
}
