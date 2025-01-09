import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative max-w-xl w-full">
      <div className="relative flex items-center rounded-full bg-muted border border-transparent transition-colors focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20 px-4 py-2">
        <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-transparent outline-none placeholder:text-muted-foreground ml-2"
        />
      </div>
    </div>
  );
};
