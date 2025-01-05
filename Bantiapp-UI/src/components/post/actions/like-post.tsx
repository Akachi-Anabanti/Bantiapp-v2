import { HeartIcon } from "lucide-react";

interface LikeProps {
  isLiked: boolean;
  className?: string;
}

export function Like({ isLiked, className = "" }: LikeProps) {
  return (
    <HeartIcon
      className={`${className} ${isLiked ? "fill-red-500 text-red-500" : ""}`}
    />
  );
}
