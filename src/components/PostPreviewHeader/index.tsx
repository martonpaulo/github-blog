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
  const { number, title, created_at, comments, user } = post;
  const { login } = user;

  const commentsText = getCountText(comments, "comment", "comments");

  const postUrl = `https://github.com/${login}/github-blog/issues/${number}`;

  return (
    <CardContainer hasBorderBottom={false}>
      <ProfileInfo>
        <h2>{title}</h2>
        <Social>
          <SocialItem href={`https://github.com/${login}`} target="_blank">
            <GithubLogo weight="bold" />
            <span>{login}</span>
          </SocialItem>

          <SocialItem href={postUrl} target="_blank">
            <CalendarBlank weight="bold" />
            <span>{timeAgo(created_at)}</span>
          </SocialItem>

          <SocialItem href={postUrl} target="_blank">
            <ChatCircle weight="bold" />
            <span>
              <strong>{comments}</strong> {commentsText}
            </span>
          </SocialItem>
        </Social>
      </ProfileInfo>
    </CardContainer>
  );
}
