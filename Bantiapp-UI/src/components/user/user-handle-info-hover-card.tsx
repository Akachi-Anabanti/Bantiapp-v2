import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { User } from "@/types/api";
import UserInfoHoverCard from "./user-info-hover-card";

export default function UserHandleInfoHoverCard({ author }: { author: User }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <p className="text-muted-foreground">@{author.handle}</p>
      </HoverCardTrigger>
      <UserInfoHoverCard author={author} />
    </HoverCard>
  );
}
