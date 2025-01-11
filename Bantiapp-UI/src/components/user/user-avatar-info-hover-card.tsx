import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { User } from "@/types/api";
import UserInfoHoverCard from "./user-info-hover-card";

export default function UserAvatarInfoHoverCard({ author }: { author: User }) {
  const handleAvatarClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    alert("Take me to the user profile!");
  };
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar onClick={handleAvatarClick}>
          <AvatarImage src={author.avatar} alt={author.username} />
          <AvatarFallback>{author.username[0]}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <UserInfoHoverCard author={author} />
    </HoverCard>
  );
}
