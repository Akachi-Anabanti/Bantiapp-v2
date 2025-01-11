import { formatDistanceToNow } from "date-fns";
import { Post, User } from "@/types/api";
import ReplyButton from "./actions/reply";
import RetweetButton from "./actions/repost";
import LikeButton from "./actions/like-post";
import BookmarkButton from "./actions/boomark";
import ShareButton from "./actions/share";
import PostMoreButtonPopover from "./post-more-button-popover";
import UserAvatarInfoHoverCard from "../user/user-avatar-info-hover-card";
import UserNameInfoHoverCard from "../user/user-name-info-hover-card";
import UserHandleInfoHoverCard from "../user/user-handle-info-hover-card";

interface PostItemProps {
  id: string;
  post: Post;
  media?: unknown;
  content: string;
  createdAt: Date;
  author: User;
  initialMetrics: {
    likes: number;
    retweets: number;
    replies: number;
  };
}

export function PostItem({
  content,
  author,
  initialMetrics,
  createdAt,
}: PostItemProps) {
  const handleMouseEnter = () => {};
  return (
    <article
      className="border-b p-4 hover:bg-muted/50 cursor-pointer transition-colors"
      onClick={() => {
        alert("The post body is clicked");
      }}
    >
      <div className="flex gap-3">
        <UserAvatarInfoHoverCard author={author} />
        <div className="flex-1">
          <div
            className="flex justify-between items-center"
            onMouseEnter={handleMouseEnter}
          >
            <div className="flex items-center gap-1 text-sm">
              <UserNameInfoHoverCard author={author} />
              <UserHandleInfoHoverCard author={author} />
              <span className="text-muted-foreground">·</span>
              <time className="text-muted-foreground">
                {formatDistanceToNow(createdAt)}
              </time>
            </div>
            <PostMoreButtonPopover author={author} />
          </div>

          <p className="mb-3 flex text-start">{content}</p>
          <div className="flex justify-between text-muted-foreground max-w-md">
            <ReplyButton count={initialMetrics.replies} />
            <RetweetButton initialCount={initialMetrics.retweets} />
            <LikeButton initialCount={initialMetrics.likes} />
            <BookmarkButton />
            <ShareButton />
          </div>
        </div>
      </div>
    </article>
  );
}
