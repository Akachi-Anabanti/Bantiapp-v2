import { RepeatIcon } from "lucide-react";

interface RetweetProps {
  isRetweeted: boolean;
  className?: string;
}

export function Retweet({ isRetweeted, className = "" }: RetweetProps) {
  return (
    <RepeatIcon
      className={`${className} ${
        isRetweeted ? "fill-green-500 text-green-500" : ""
      }`}
    />
  );
}
