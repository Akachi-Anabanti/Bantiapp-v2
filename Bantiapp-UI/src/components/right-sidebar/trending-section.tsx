import { Card, CardContent, CardTitle } from "../ui/card";
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
    <Card className="">
      <CardTitle className="font-bold text-xl mb-2">What's happening</CardTitle>
      <CardContent className="p-0">
        <div className="space-y-2">
          {trendingItems.map((item, index) => (
            <TrendingItem key={index} {...item} onClick={handleClick} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
