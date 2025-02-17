import {
  PostBody,
  PostDate,
  PostPreviewContainer,
  PostTitle,
} from "@/components/PostPreview/styles";
import { PostType } from "@/types/post";
import { timeAgo } from "@/utils/dateFormatter";
import { getSummary } from "@/utils/textFormatter";

interface PostPreviewProps {
  post: PostType;
}

export function PostPreview({ post }: PostPreviewProps) {
  const { title, number, created_at, body } = post;

  return (
    <PostPreviewContainer to={`/post/${number}`}>
      <PostTitle>{title}</PostTitle>
      <PostDate>{timeAgo(created_at)}</PostDate>
      <PostBody>{getSummary(body)}</PostBody>
    </PostPreviewContainer>
  );
}
