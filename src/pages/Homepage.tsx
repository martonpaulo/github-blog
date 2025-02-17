import { PostFeed } from "@/components/PostFeed";
import { PostMeta } from "@/components/PostMeta";
import { SearchBar } from "@/components/SearchBar";
import { UserProfileCard } from "@/components/UserProfileCard";

export function Homepage() {
  return (
    <>
      <UserProfileCard />
      <PostMeta />
      <SearchBar />
      <PostFeed />
    </>
  );
}
