// types/route.ts
export type RouteKey = "Home" | "Profile" | "Login" | "Register";

export interface RouteConfig {
  path: string;
  label: RouteKey;
  icon?: React.ComponentType;
  protected?: boolean;
}
