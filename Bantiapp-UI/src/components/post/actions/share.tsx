import { toast } from "@/hooks/use-toast";
import { ShareIcon } from "lucide-react";

const ShareButton = () => {
  const handleShare = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    toast({
      variant: "default",
      description: "Your post has been shared successfully!",
      className: "border-green-600",
    });
  };
  return (
    <button onClick={handleShare}>
      <ShareIcon size={20} />
    </button>
  );
};
export default ShareButton;
