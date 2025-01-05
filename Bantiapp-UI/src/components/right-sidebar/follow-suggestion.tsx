interface FollowSuggestionProps {
  name: string;
  handle: string;
  avatar: string;
}

export const FollowSuggestion = ({
  name,
  handle,
  avatar,
}: FollowSuggestionProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">@{handle}</p>
        </div>
      </div>
      <button className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
        Follow
      </button>
    </div>
  );
};
