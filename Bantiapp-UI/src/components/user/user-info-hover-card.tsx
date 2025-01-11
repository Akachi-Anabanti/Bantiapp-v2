import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Users2 } from "lucide-react";
import { HoverCardContent } from "../ui/hover-card";
import { Button } from "../ui/button";
import { AvatarGroup } from "../ui/avatar-group";
import { User } from "@/types/api";

export default function UserInfoHoverCard({ author }: { author: User }) {
  // mutual followers will be gotten from the db
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mutualFollowers: string | any[] = [
    { src: "https://github.com/user1.png", fallback: "U1", alt: "User 1" },
    { src: "https://github.com/user2.png", fallback: "U2", alt: "User 2" },
    { src: "https://github.com/user3.png", fallback: "U3", alt: "User 3" },
  ];

  const handleHoverCardClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  return (
    <HoverCardContent
      className="w-80 rounded-xl shadow-md shadow-blue-500/50 hover:shadow-blue-600/50 cursor-default"
      onClick={handleHoverCardClick}
    >
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex justify-between items-start mx-4">
          <div>
            <Avatar className="h-16 w-16">
              <AvatarImage src={author.avatar} alt={author.username} />
              <AvatarFallback>{author.username[0]}</AvatarFallback>
            </Avatar>
            <div className="mt-2">
              <h4 className="font-semibold">{author.username}</h4>
              <p className="text-sm text-muted-foreground button">
                @{author.handle}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="text-sm h-8 rounded-full bg-blue-600/25"
          >
            Follow
          </Button>
        </div>

        {/* User Info Section */}
        <div className="space-y-2 flex text-start">
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex gap-4 text-sm">
          <div>
            <span className="font-semibold">{author.followingCount}</span>{" "}
            <span className="text-muted-foreground">Following</span>
          </div>
          <div>
            <span className="font-semibold">{author.followersCount}| 89</span>{" "}
            <span className="text-muted-foreground">Followers</span>
          </div>
        </div>

        {/* Mutual Followers Section */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {mutualFollowers.length > 0 ? (
            <>
              <AvatarGroup avatars={mutualFollowers} maxAvatars={3} size="sm" />
              <p className="text-xs">
                Followed by <Users2 className="inline h-3 w-3" /> 45 people you
                follow
              </p>
            </>
          ) : (
            <p className="">Not followed by anyone you're following </p>
          )}
        </div>

        {/* Footer Section */}
        <div className="flex items-center text-xs text-muted-foreground pt-2 border-t">
          <CalendarIcon className="mr-2 h-3 w-3" />
          {author.createdAt}
        </div>
      </div>
    </HoverCardContent>
  );
}
