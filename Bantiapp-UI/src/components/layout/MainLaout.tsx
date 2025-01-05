// components/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main className="flex-1 overflow-auto p-6">
      <Outlet />
    </main>
  );
};
