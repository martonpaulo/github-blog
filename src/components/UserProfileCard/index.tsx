import { GithubLogo, Link, Users } from "phosphor-react";

import { CardContainer } from "@/components/CardContainer";
import {
  Avatar,
  Bio,
  ProfileInfo,
  Social,
  SocialItem,
} from "@/components/UserProfileCard/styles";
import { author } from "@/data/author";
import { getCountText } from "@/utils/textFormatter";

export function UserProfileCard() {
  const {
    name,
    avatarUrl,
    description,
    username,
    customLink,
    customLinkUrl,
    followersCount,
  } = author;

  const followersText = getCountText(followersCount, "follower", "followers");

  return (
    <CardContainer>
      <Avatar src={avatarUrl} alt={`Avatar of ${name}`} />
      <ProfileInfo>
        <h2>{name}</h2>
        <Bio>{description}</Bio>
        <Social>
          <SocialItem href={`https://github.com/${username}`} target="_blank">
            <GithubLogo weight="bold" />
            <span>{username}</span>
          </SocialItem>

          <SocialItem href={customLinkUrl} target="_blank">
            <Link weight="bold" />
            <span>{customLink}</span>
          </SocialItem>

          <SocialItem
            href={`https://github.com/${followersCount}?tab=followers`}
            target="_blank"
          >
            <Users weight="bold" />
            <span>
              <strong>{followersCount}</strong> {followersText}
            </span>
          </SocialItem>
        </Social>
      </ProfileInfo>
    </CardContainer>
  );
}
