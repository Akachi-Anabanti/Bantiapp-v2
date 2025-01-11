import { formatCount } from "@/utils/formatCount";
import { MessageSquare } from "lucide-react";

function ReplyButton({ count }: { count: number }) {
  const handleReply = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  return (
    <button
      className="flex items-center gap-2 hover:text-blue-500"
      onClick={handleReply}
    >
      <MessageSquare size={20} /> {formatCount(count)}
    </button>
  );
}

export default ReplyButton;
