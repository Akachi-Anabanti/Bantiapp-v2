import { FrownIcon, MoreHorizontal } from "lucide-react";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../../ui/popover";

export default function TrendingMoreButtonPopover() {
  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onClick on parent
  };

  const handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent popover content clicks from bubbling up
  };
  const TrendTopicOPtions = [
    "The associated content is not relevant",
    "This trend is spam",
    "Not interested in this",
    "This trend is a duplicate",
    "This trend is harmful or spammy",
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          onClick={handleMoreClick}
          className="hover:bg-blue-600/25 transition-colors rounded-full p-2"
          aria-label="More options"
        >
          <MoreHorizontal size={20} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full rounded-xl shadow-md shadow-blue-500/50 hover:shadow-blue-600/50"
        align="end"
        alignOffset={0}
        onClick={handlePopoverClick}
      >
        <div className="grid gap-4">
          {TrendTopicOPtions.map((trend, idx) => (
            <div
              key={idx}
              className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2"
            >
              <FrownIcon size={17} />
              <p className="font-medium">{trend}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
