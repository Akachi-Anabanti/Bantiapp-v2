import { Bookmark } from "lucide-react";
import { useState } from "react";

// Bookmark Button Component
const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      className={`hover:text-blue-500 ${isBookmarked ? "text-blue-500" : ""}`}
      onClick={handleBookmark}
    >
      <Bookmark
        size={20}
        className={`${isBookmarked ? "fill-blue-500" : ""}`}
      />
    </button>
  );
};
export default BookmarkButton;
