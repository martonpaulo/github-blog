import { PostPreview } from "@/components/PostPreview";
import { PostFeedContainer } from "@/components/PostFeed/styles";
import { posts } from "@/data/posts";

export function PostFeed() {
  return (
    <PostFeedContainer>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </PostFeedContainer>
  );
}
