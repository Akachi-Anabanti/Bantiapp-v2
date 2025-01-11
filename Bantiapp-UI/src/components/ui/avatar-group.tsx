import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: {
    src?: string;
    fallback: string;
    alt?: string;
  }[];
  maxAvatars?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
} as const;

const offsetClasses = {
  sm: "-ml-2",
  md: "-ml-3",
  lg: "-ml-4",
} as const;

export const AvatarGroup = ({
  avatars,
  maxAvatars = 4,
  size = "md",
  className,
  ...props
}: AvatarGroupProps) => {
  const visibleAvatars = avatars.slice(0, maxAvatars);
  const remainingAvatars = avatars.length - maxAvatars;
  const showCount = remainingAvatars > 0;

  return (
    <div className={cn("flex items-center", className)} {...props}>
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className={cn(
            "ring-2 ring-background rounded-full",
            index !== 0 && offsetClasses[size]
          )}
        >
          <Avatar className={cn(sizeClasses[size])}>
            {avatar.src && (
              <AvatarImage
                src={avatar.src}
                alt={avatar.alt || avatar.fallback}
              />
            )}
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
        </div>
      ))}
      {showCount && (
        <div
          className={cn(
            "bg-muted flex items-center justify-center rounded-full ring-2 ring-background text-muted-foreground font-medium",
            offsetClasses[size],
            sizeClasses[size],
            "text-xs"
          )}
        >
          +{remainingAvatars}
        </div>
      )}
    </div>
  );
};
