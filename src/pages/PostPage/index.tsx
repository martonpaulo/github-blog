import { PostPreviewHeader } from "@/components/PostPreviewHeader";
import { PostBody } from "@/components/PostBody";
import { usePost } from "@/hooks/usePost";

export function PostPage() {
  const { post } = usePost();

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <PostPreviewHeader post={post} />
      <PostBody content={post.content} />
    </>
  );
}
