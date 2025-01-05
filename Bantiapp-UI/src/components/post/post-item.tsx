import { Post } from "@/types/api";

import { useState } from "react";
import { PostActions } from "./actions/post-actions";

interface PostItemProps {
  id: string;
  post: Post;
  media?: unknown;
  content: string;
  initialMetrics: {
    likes: number;
    retweets: number;
  };
}

export function PostItem({ content, initialMetrics }: PostItemProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [metrics, setMetrics] = useState(initialMetrics);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setMetrics((prev) => ({
      ...prev,
      likes: prev.likes + (isLiked ? -1 : 1),
    }));
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setMetrics((prev) => ({
      ...prev,
      retweets: prev.retweets + (isRetweeted ? -1 : 1),
    }));
  };

  return (
    <div className="border-b p-4">
      <p className="mb-3">{content}</p>
      <PostActions
        isBookmarked={isBookmarked}
        isLiked={isLiked}
        isRetweeted={isRetweeted}
        onBookmark={() => setIsBookmarked(!isBookmarked)}
        onLike={handleLike}
        onRetweet={handleRetweet}
        metrics={metrics}
      />
    </div>
  );
}
