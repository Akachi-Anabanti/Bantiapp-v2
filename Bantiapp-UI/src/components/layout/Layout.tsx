import NavigationTabs from "./NavigationTabs";
import { RightSidebar } from "../right-sidebar/right-sidebar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";

export default function Layout() {
  return (
    <>
      <SidebarProvider className="flex gap-2">
        <AppSidebar
          variant="sidebar"
          className="hidden lg:block"
          collapsible="icon"
          style={{ border: "none" }}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 w-full max-w-full overflow-hidden border-r border-l relative">
          <nav className="static z-50 bg-white dark:bg-gray-800 overflow-x-hidden">
            <NavigationTabs />
          </nav>
          <div className="flex-1 overflow-x-hidden">
            <Outlet />
          </div>
        </div>

        {/* Right Sidebar with Footer */}
        <footer className="static hidden lg:block w-[24rem] flex-shrink-0">
          <div className="flex flex-col">
            <div className="flex-1 p-4">
              <RightSidebar />
            </div>
          </div>
        </footer>
      </SidebarProvider>
    </>
  );
}
