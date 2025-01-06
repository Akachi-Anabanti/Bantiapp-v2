import { Button } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { TrendingItem } from "./trending-item";

export const TrendingSection = () => {
  const trendingItems = [
    {
      category: "Technology",
      topic: "#React",
      posts: "50.4K",
    },
    {
      category: "Web Dev",
      topic: "#TypeScript",
      posts: "25.2K",
    },
  ];

  const handleClick = () => {
    alert("Pinched!");
  };

  return (
    <Card>
      <CardHeader className="font-bold text-xl mb-2">
        What's happening
      </CardHeader>
      <CardContent className="p-0">
        {trendingItems.map((item, index) => (
          <TrendingItem key={index} {...item} onClick={handleClick} />
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
