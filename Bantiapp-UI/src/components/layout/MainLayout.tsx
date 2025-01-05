// components/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { RightSidebar } from "@/components/right-sidebar/right-sidebar";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 w-full h-[600] overflow-y-auto scrollbar-none">
          <Outlet />
        </main>
        <div className="hidden lg:block">
          <RightSidebar />
        </div>
      </SidebarProvider>
    </div>
  );
};
