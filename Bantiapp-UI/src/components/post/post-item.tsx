import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { formatDistanceToNow } from "date-fns";

import { Post, User } from "@/types/api";
import ReplyButton from "./actions/reply";
import RetweetButton from "./actions/repost";
import LikeButton from "./actions/like-post";
import BookmarkButton from "./actions/boomark";
import ShareButton from "./actions/share";

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
  return (
    <article
      className="border-b p-4 hover:bg-muted/50 cursor-pointer transition-colors"
      onClick={() => {
        alert("The post body is clicked");
      }}
    >
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.username} />
          <AvatarFallback>{author.username[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="font-medium">{author.username}</p>
            <p className="text-muted-foreground">@{author.handle}</p>
            <span className="text-muted-foreground">·</span>
            <time className="text-muted-foreground">
              {formatDistanceToNow(createdAt, { addSuffix: true })}
            </time>
          </div>
          <p className="mt-2 mb-3 flex text-start">{content}</p>
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
