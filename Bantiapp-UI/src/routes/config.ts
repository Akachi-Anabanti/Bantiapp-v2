import { PATHS } from "@/types/paths";
import { Home, User, LogIn, UserPlus } from "lucide-react";
import type { RouteConfig } from "@/types/route";

export const routeConfig: RouteConfig[] = [
  {
    path: PATHS.HOME,
    label: "Home",
    icon: Home,
    protected: true,
  },
  {
    path: PATHS.PROFILE,
    label: "Profile",
    icon: User,
    protected: true,
  },
  {
    path: PATHS.LOGIN,
    label: "Login",
    icon: LogIn,
    protected: false,
  },
  {
    path: PATHS.REGISTER,
    label: "Register",
    icon: UserPlus,
    protected: false,
  },
];
