import { Separator } from "../ui/separator";
import { FollowSection } from "./follow-suggestion/follow-section";
import FooterInfo from "./footer-info";
import { SearchBar } from "./search-bar";
import { TrendingSection } from "./trending/trending-section";

// components/right-sidebar/RightSidebar.tsx
export const RightSidebar = () => {
  return (
    <div className="top-0 hidden lg:block w-[370px] h-full">
      <div className="space-y-4 gap-4">
        <SearchBar />
        <TrendingSection />
        <FollowSection />
        <Separator />
        <FooterInfo />
      </div>
    </div>
  );
};
