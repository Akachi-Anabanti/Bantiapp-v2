import { Heart } from "lucide-react";
import { useState } from "react";

// Like Button Component
const LikeButton = ({ initialCount }: { initialCount: number }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleLike = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setCount((prev) => prev + (isLiked ? -1 : 1));
  };

  return (
    <button
      className="flex items-center gap-2 hover:text-red-500"
      onClick={handleLike}
    >
      <Heart size={20} className={`${isLiked ? "fill-red-500" : ""}`} />
      {count}
    </button>
  );
};

export default LikeButton;
