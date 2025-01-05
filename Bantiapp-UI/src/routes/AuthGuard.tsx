import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { PATHS } from "@/types/paths";

interface AuthGuardRouteProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardRouteProps) => {
  const { accessToken } = useAuthStore();
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
