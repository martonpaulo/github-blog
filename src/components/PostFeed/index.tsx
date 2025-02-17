import { PostFeedContainer } from "@/components/PostFeed/styles";
import { PostPreview } from "@/components/PostPreview";
import { StateBox } from "@/components/StateBox";
import { usePosts } from "@/hooks/usePosts";

export function PostFeed() {
  const { posts, loading, error } = usePosts((context) => ({
    posts: context.posts,
    loading: context.loading,
    error: context.error,
  }));

  if (loading || error || !posts) {
    return <StateBox loading={loading} error={error} data={posts} />;
  }

  return (
    <PostFeedContainer>
      {posts.map((post) => (
        <PostPreview key={post.number} post={post} />
      ))}
    </PostFeedContainer>
  );
}
