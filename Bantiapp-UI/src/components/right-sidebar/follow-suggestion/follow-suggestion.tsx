import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FollowSuggestionProps {
  name: string;
  handle: string;
  avatar: string;
  onFollow?: () => void;
  className?: string;
}

export const FollowSuggestion = ({
  name,
  handle,
  avatar,
  onFollow,
  className,
}: FollowSuggestionProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 p-2 hover:bg-muted/50 rounded-lg transition-colors",
        className
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 truncate">
          <p className="font-medium truncate">{name}</p>
          <p className="text-sm text-muted-foreground truncate">@{handle}</p>
        </div>
      </div>
      <Button
        variant="default"
        size="sm"
        className="rounded-full"
        onClick={onFollow}
      >
        Follow
      </Button>
    </div>
  );
};
