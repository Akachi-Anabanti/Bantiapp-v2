import { BookmarkIcon, BookmarkCheckIcon } from "lucide-react";

interface BookmarkProps {
  isBookmarked: boolean;
  className?: string;
}

export function Bookmark({ isBookmarked, className = "" }: BookmarkProps) {
  return isBookmarked ? (
    <BookmarkCheckIcon className={className} />
  ) : (
    <BookmarkIcon className={className} />
  );
}
