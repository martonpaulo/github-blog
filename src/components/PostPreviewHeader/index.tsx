import { CalendarBlank, ChatCircle, GithubLogo } from "phosphor-react";

import { CardContainer } from "@/components/CardContainer";
import {
  ProfileInfo,
  Social,
  SocialItem,
} from "@/components/PostPreviewHeader/styles";
import { PostType } from "@/types/post";
import { timeAgo } from "@/utils/dateFormatter";
import { getCountText } from "@/utils/textFormatter";

interface PostPreviewHeaderProps {
  post: PostType;
}

export function PostPreviewHeader({ post }: PostPreviewHeaderProps) {
  const { id, title, timestamp, commentsCount, authorUsername } = post;

  const commentsText = getCountText(commentsCount, "comment", "comments");

  const postUrl = `https://github.com/${authorUsername}/github-blog/issues/${id}`;

  return (
    <CardContainer hasBorderBottom={false}>
      <ProfileInfo>
        <h2>{title}</h2>
        <Social>
          <SocialItem
            href={`https://github.com/${authorUsername}`}
            target="_blank"
          >
            <GithubLogo weight="bold" />
            <span>{authorUsername}</span>
          </SocialItem>

          <SocialItem href={postUrl} target="_blank">
            <CalendarBlank weight="bold" />
            <span>{timeAgo(timestamp)}</span>
          </SocialItem>

          <SocialItem href={postUrl} target="_blank">
            <ChatCircle weight="bold" />
            <span>
              <strong>{commentsCount}</strong> {commentsText}
            </span>
          </SocialItem>
        </Social>
      </ProfileInfo>
    </CardContainer>
  );
}
