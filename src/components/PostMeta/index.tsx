import { PostMetaContainer } from "@/components/PostMeta/styles";
import { posts } from "@/data/posts";
import { getCountText } from "@/utils/textFormatter";

export function PostMeta() {
  const postsCount = posts.length;
  const postsText = getCountText(postsCount, "post", "posts");

  return (
    <PostMetaContainer>
      <h2>Posts</h2>
      <p>{`${postsCount} ${postsText}`}</p>
    </PostMetaContainer>
  );
}
