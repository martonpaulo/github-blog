import { PostMetaContainer } from "@/components/PostMeta/styles";
import { StateBox } from "@/components/StateBox";
import { usePosts } from "@/hooks/usePosts";
import { getCountText } from "@/utils/textFormatter";

export function PostMeta() {
  const { posts, loading, error } = usePosts((context) => ({
    posts: context.posts,
    loading: context.loading,
    error: context.error,
  }));

  if (loading || error || !posts) {
    return <StateBox loading={loading} error={error} data={posts} />;
  }

  const postsCount = posts.length;
  const postsText = getCountText(postsCount, "post", "posts");

  return (
    <PostMetaContainer>
      <h2>Posts</h2>
      <p>{`${postsCount} ${postsText}`}</p>
    </PostMetaContainer>
  );
}
