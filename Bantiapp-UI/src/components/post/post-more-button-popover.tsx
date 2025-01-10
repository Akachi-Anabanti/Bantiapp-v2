import {
  MoreHorizontal,
  UserPlus2,
  UserCog2,
  ListPlus,
  VolumeOffIcon,
  Ban,
  ChartNoAxesColumn,
  CodeXml,
  Flag,
  Megaphone,
} from "lucide-react";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import { User } from "@/types/api";

export default function PostMoreButtonPopover({ author }: { author: User }) {
  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onClick on parent
  };

  const handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent popover content clicks from bubbling up
  };

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
        <div className="grid gap-1 font-sm">
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <UserPlus2 size={17} />
            <p className="font-sm">Follow @{author.handle}</p>
          </div>
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <UserCog2 size={17} />
            <p className="font-sm">Subscribe to @{author.handle}</p>
          </div>
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <ListPlus size={17} />
            <p className="font-sm">Add/Remove @{author.handle} from List</p>
          </div>
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <VolumeOffIcon size={17} />
            <p className="font-sm">Mute @{author.handle}</p>
          </div>
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <Ban size={17} />
            <p className="font-sm">Block @{author.handle}</p>
          </div>
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <ChartNoAxesColumn size={17} />
            <p className="font-sm">View Post engagements</p>
          </div>
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <CodeXml size={17} />
            <p className="font-sm">Embed post</p>
          </div>
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <Flag size={17} />
            <p className="font-sm">Report post</p>
          </div>
          <div className="hover:bg-gray-800/25 flex flex-row items-center gap-2 cursor-pointer p-2">
            <Megaphone size={17} />
            <p className="font-sm">Request Community Note</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
