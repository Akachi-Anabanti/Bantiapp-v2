import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthGuard } from "./AuthGuard";
import { MainLayout } from "@/components/layout/MainLaout";
import PageLoader from "@/components/layout/PageLoader";

// Lazy load pages
const pages = {
  Login: lazy(() => import("@/app/login/page")),
  // Register: lazy(() => import("@/app/register/page")),
  Home: lazy(() => import("@/app/dashboard/page")),
  // Profile: lazy(() => import("@/app/profile/page")),
  // Commented pages kept for future implementation
  // Notifications: lazy(() => import("@/app/notifications/page")),
  // Messages: lazy(() => import("@/app/messages/page")),
  // ChatRoom: lazy(() => import("@/app/messages/[roomId]/page")),
};

// Wrapper component for Suspense loading
const withLoader = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

// Public routes configuration
const publicRoutes = [
  {
    path: "/login",
    element: withLoader(pages.Login),
  },
  {
    path: "/",
    element: withLoader(pages.Home),
  },
  // {
  //   path: "/register",
  //   element: withLoader(pages.Register),
  // },
];

// Protected routes configuration
const protectedRoutes = [
  // {
  //   path: "/",
  //   element: withLoader(pages.Home),
  // },
  { path: "*" },
  // {
  //   path: "/profile/:username",
  //   element: withLoader(pages.Profile),
  // },
  // {
  //   path: "/notifications",
  //   element: withLoader(pages.Notifications),
  // },
  // {
  //   path: "/messages",
  //   element: withLoader(pages.Messages),
  // },
  // {
  //   path: "/messages/:roomId",
  //   element: withLoader(pages.ChatRoom),
  // },
];

// Main router configuration
export const router = createBrowserRouter([
  ...publicRoutes,
  {
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: protectedRoutes,
  },
]);
