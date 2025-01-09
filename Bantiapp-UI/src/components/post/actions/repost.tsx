import { Repeat } from "lucide-react";
import { useState } from "react";

const RetweetButton = ({ initialCount }: { initialCount: number }) => {
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleRetweet = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsRetweeted(!isRetweeted);
    setCount((prev) => prev + (isRetweeted ? -1 : 1));
  };

  return (
    <button
      className={`flex items-center gap-2 hover:text-green-500 ${
        isRetweeted ? "text-green-500" : ""
      }`}
      onClick={handleRetweet}
    >
      <Repeat size={20} /> {count}
    </button>
  );
};
export default RetweetButton;
