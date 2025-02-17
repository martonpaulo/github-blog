import { PostBody } from "@/components/PostBody";
import { PostPreviewHeader } from "@/components/PostPreviewHeader";
import { StateBox } from "@/components/StateBox";
import { usePost } from "@/hooks/usePost";

export function PostPage() {
  const { post } = usePost();

  if (!post) {
    return <StateBox data={post} />;
  }

  return (
    <>
      <PostPreviewHeader post={post} />
      <PostBody body={post.body} />
    </>
  );
}
