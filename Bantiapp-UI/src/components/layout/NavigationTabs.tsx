import { useRef, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "For you", path: "/" },
  { name: "Following", path: "/following" },
  { name: "Sports", path: "/sports" },
  { name: "News", path: "/news" },
  { name: "Entertainment", path: "/entertainment" },
  { name: "Technology", path: "/technology" },
  { name: "Politics", path: "/politics" },
  { name: "Gaming", path: "/gaming" },
];

export const NavigationTabs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [showControls, setShowControls] = useState(false);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScroll({
      left: scrollLeft > 0,
      right: scrollLeft < scrollWidth - clientWidth - 1,
    });
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      updateScrollButtons();
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -200 : 200;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div
      className="z-10 bg-background border-b w-full"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative flex items-center w-full">
        {showControls && canScroll.left && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-20 h-full px-1 sm:px-2 bg-gradient-to-r from-background via-background to-transparent hover:bg-gray-600"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex-1 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex px-2 sm:px-4 min-w-full">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={cn(
                  "px-2 sm:px-4 py-3 text-xs sm:text-sm whitespace-nowrap font-medium transition-colors hover:bg-muted/25",
                  "flex-shrink-0",
                  location.pathname === tab.path && "border-b-4 border-blue-600"
                )}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        {showControls && canScroll.right && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-20 h-full px-1 sm:px-2 bg-gradient-to-l from-background via-background to-transparent hover:bg-gray-600"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationTabs;
