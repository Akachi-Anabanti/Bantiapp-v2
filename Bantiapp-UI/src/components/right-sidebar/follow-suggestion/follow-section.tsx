import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FollowSuggestion } from "./follow-suggestion";
import { Button } from "@/components/ui/button";

export const FollowSection = () => {
  const suggestedUsers = [
    {
      name: "Jane Cooper",
      handle: "jane_cooper",
      avatar: "/api/placeholder/32/32",
    },
    {
      name: "Wade Warren",
      handle: "wade_warren",
      avatar: "/api/placeholder/32/32",
    },
    {
      name: "James Buffet",
      handle: "james_buffet",
      avatar: "/api/placeholder/32/32",
    },
  ];

  return (
    <Card>
      <CardHeader className="font-bold text-xl pb-2 flex items-start">
        Who to follow
      </CardHeader>
      <CardContent className="space-y-2">
        {suggestedUsers.map((user, index) => (
          <FollowSuggestion key={index} {...user} />
        ))}
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="link" className="text-blue-600 p-0 h-auto">
          Show More
        </Button>
      </CardFooter>
    </Card>
  );
};
