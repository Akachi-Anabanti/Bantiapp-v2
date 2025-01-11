import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { User } from "@/types/api";
import { Button } from "../ui/button";
import UserInfoHoverCard from "./user-info-hover-card";

export default function UserNameInfoHoverCard({ author }: { author: User }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant={"link"} className="font-medium outline-none p-0">
          {author.username}
        </Button>
      </HoverCardTrigger>
      <UserInfoHoverCard author={author} />
    </HoverCard>
  );
}
