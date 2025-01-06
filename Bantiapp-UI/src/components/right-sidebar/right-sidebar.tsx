import { FollowSection } from "./follow-section";
import { SearchBar } from "./search-bar";
import { TrendingSection } from "./trending/trending-section";

// components/right-sidebar/RightSidebar.tsx
export const RightSidebar = () => {
  return (
    <div className="sticky top-0 hidden lg:block w-[350px] h-screen pl-8 pr-4">
      <div className="space-y-4 pt-4 gap-4">
        <SearchBar />
        <TrendingSection />
        <FollowSection />
      </div>
    </div>
  );
};
