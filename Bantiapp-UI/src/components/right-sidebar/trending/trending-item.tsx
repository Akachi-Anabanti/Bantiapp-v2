import { Dot } from "lucide-react";
import TrendingMoreButtonPopover from "./trending-more-button-popover";

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
  return (
    <div
      className="p-4 hover:bg-muted duration-300 cursor-pointer my-0 pt-1 pb-0"
      onClick={onClick}
      role="button"
      aria-label="Trending item"
    >
      <div>
        <div className="flex items-center justify-between my-0">
          <div className="text-sm text-gray-500 flex items-center space-x-1">
            {category && (
              <>
                <span>{category}</span>
                <Dot size={18} />
              </>
            )}

            <span>Trending</span>
          </div>

          <TrendingMoreButtonPopover />
        </div>
        <div className="flex flex-col items-start my-0 mt-0">
          <p className="font-medium text-lg text-900">{topic}</p>
          <p className="text-sm text-gray-500">{posts} posts</p>
        </div>
      </div>
    </div>
  );
};
