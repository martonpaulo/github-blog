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
  const { title, id, timestamp, content } = post;

  return (
    <PostPreviewContainer to={`/post/${id}`}>
      <PostTitle>{title}</PostTitle>
      <PostDate>{timeAgo(timestamp)}</PostDate>
      <PostBody>{getSummary(content)}</PostBody>
    </PostPreviewContainer>
  );
}
