import { cn } from "@/lib/utils"; // For combining classes

export default function PostSkeleton() {
  return (
    <div className={cn("space-y-4 animate-pulse p-4 border-b")}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-muted/60" />
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-muted/60 rounded w-1/4" />
          <div className="h-3 bg-muted/60 rounded w-1/3" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-muted/60 rounded w-full" />
        <div className="h-4 bg-muted/60 rounded w-3/4" />
      </div>
    </div>
  );
}
