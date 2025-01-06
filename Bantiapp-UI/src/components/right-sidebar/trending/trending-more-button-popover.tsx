import { MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../../ui/popover";

export default function TrendingMoreButtonPopover() {
  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering onClick on parent
  };

  const handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent popover content clicks from bubbling up
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          onClick={handleMoreClick}
          className="hover:bg-blue-600/25 transition-colors rounded-full p-2"
          aria-label="More options"
        >
          <MoreHorizontal size={20} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80"
        align="end"
        alignOffset={0}
        onClick={handlePopoverClick}
      >
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
