import { GithubLogo, Link, Users } from "phosphor-react";

import { CardContainer } from "@/components/CardContainer";
import { StateBox } from "@/components/StateBox";
import {
  Avatar,
  Bio,
  ProfileInfo,
  Social,
  SocialItem,
} from "@/components/UserProfileCard/styles";
import { useAuthor } from "@/hooks/useAuthor";
import { getCountText } from "@/utils/textFormatter";

export function UserProfileCard() {
  const { author, loading, error } = useAuthor((context) => ({
    author: context.author,
    loading: context.loading,
    error: context.error,
  }));

  if (loading || error || !author) {
    return <StateBox loading={loading} error={error} data={author} />;
  }

  const { name, avatar_url, bio, login, blog, followers } = author;
  const followersText = getCountText(followers, "follower", "followers");

  return (
    <CardContainer>
      <Avatar src={avatar_url} alt={`Avatar of ${name}`} />
      <ProfileInfo>
        <h2>{name}</h2>
        <Bio>{bio}</Bio>
        <Social>
          <SocialItem href={`https://github.com/${login}`} target="_blank">
            <GithubLogo weight="bold" />
            <span>{login}</span>
          </SocialItem>

          <SocialItem href={blog} target="_blank">
            <Link weight="bold" />
            <span>{blog}</span>
          </SocialItem>

          <SocialItem
            href={`https://github.com/${followers}?tab=followers`}
            target="_blank"
          >
            <Users weight="bold" />
            <span>
              <strong>{followers}</strong> {followersText}
            </span>
          </SocialItem>
        </Social>
      </ProfileInfo>
    </CardContainer>
  );
}
