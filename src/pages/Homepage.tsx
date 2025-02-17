import { PostFeed } from "@/components/PostFeed";
import { PostMeta } from "@/components/PostMeta";
import { SearchForm } from "@/components/SearchForm";
import { UserProfileCard } from "@/components/UserProfileCard";

export function Homepage() {
  return (
    <>
      <UserProfileCard />
      <PostMeta />
      <SearchForm />
      <PostFeed />
    </>
  );
}
