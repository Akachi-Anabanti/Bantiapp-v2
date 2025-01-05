import { Bookmark } from "./boomark";
import { Like } from "./like-post";
import { Retweet } from "./repost";

interface PostActionsProps {
  isBookmarked: boolean;
  isLiked: boolean;
  isRetweeted: boolean;
  onBookmark: () => void;
  onLike: () => void;
  onRetweet: () => void;
  metrics?: {
    likes: number;
    retweets: number;
  };
}

export function PostActions({
  isBookmarked,
  isLiked,
  isRetweeted,
  onBookmark,
  onLike,
  onRetweet,
  metrics,
}: PostActionsProps) {
  return (
    <div className="flex items-center justify-between max-w-md py-2">
      <button
        onClick={onLike}
        className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors"
      >
        <Like isLiked={isLiked} className="w-5 h-5" />
        {metrics?.likes && <span className="text-sm">{metrics.likes}</span>}
      </button>

      <button
        onClick={onRetweet}
        className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors"
      >
        <Retweet isRetweeted={isRetweeted} className="w-5 h-5" />
        {metrics?.retweets && (
          <span className="text-sm">{metrics.retweets}</span>
        )}
      </button>

      <button
        onClick={onBookmark}
        className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors"
      >
        <Bookmark isBookmarked={isBookmarked} className="w-5 h-5" />
      </button>
    </div>
  );
}
