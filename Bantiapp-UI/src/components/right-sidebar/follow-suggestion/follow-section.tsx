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
  ];

  return (
    <Card>
      <CardHeader className="font-bold text-xl mb-4">Who to follow</CardHeader>
      <CardContent className="">
        {suggestedUsers.map((user, index) => (
          <FollowSuggestion key={index} {...user} />
        ))}
      </CardContent>
      <CardFooter className="px-0 pb-0">
        <Button variant={"link"} className="outline-none text-md text-blue-600">
          Show More
        </Button>
      </CardFooter>
    </Card>
  );
};
