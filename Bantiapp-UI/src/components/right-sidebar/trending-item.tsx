import { Dot, MoreHorizontal } from "lucide-react";

interface TrendingItemProps {
  category?: string;
  topic: string;
  posts: string;
  onClick: () => void;
}

export const TrendingItem = ({
  category,
  topic,
  posts,
  onClick,
}: TrendingItemProps) => {
  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onClick on parent
    alert("More clicked");
  };

  return (
    <div
      className="p-4 hover:bg-muted duration-300 cursor-pointer my-0"
      onClick={onClick}
      role="button"
      aria-label="Trending item"
    >
      <div className="">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 flex items-center space-x-1">
            {category && (
              <>
                <span>{category}</span>
                <Dot size={18} />
              </>
            )}

            <span>Trending</span>
          </div>
          <button
            onClick={handleMoreClick}
            className="text-500 hover:text-gray-700"
            aria-label="More options"
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
        <div className="flex flex-col items-start my-0">
          <p className="font-medium text-lg text-900">{topic}</p>
          <p className="text-sm text-gray-500">{posts} posts</p>
        </div>
      </div>
    </div>
  );
};
