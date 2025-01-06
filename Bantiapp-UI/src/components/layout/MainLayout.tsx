import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { RightSidebar } from "@/components/right-sidebar/right-sidebar";
import { NavigationTabs } from "./NavigationTabs";

export const MainLayout = () => {
  return (
    <div className="flex w-full">
      <SidebarProvider>
        {/* Left Sidebar */}
        <AppSidebar className="hidden lg:block flex-shrink-0" />

        {/* Main Content Area */}
        <div className="relative flex-1 flex flex-col min-w-0 w-full max-w-full overflow-hidden">
          <div className="sticky top-0 z-10">
            <NavigationTabs />
          </div>
          <div className="flex-1 overflow-x-hidden">
            <Outlet />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-[350px] flex-shrink-0 overflow-y-auto no-scrollbar">
          <RightSidebar />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default MainLayout;
