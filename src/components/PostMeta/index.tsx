import { PostMetaContainer } from "@/components/PostMeta/styles";
import { posts } from "@/data/posts";
import { H2 } from "@/styles/typography";
import { getCountText } from "@/utils/textFormatter";

export function PostMeta() {
  const postsCount = posts.length;
  const postsText = getCountText(postsCount, "post", "posts");

  return (
    <PostMetaContainer>
      <H2>Posts</H2>
      <p>{`${postsCount} ${postsText}`}</p>
    </PostMetaContainer>
  );
}
