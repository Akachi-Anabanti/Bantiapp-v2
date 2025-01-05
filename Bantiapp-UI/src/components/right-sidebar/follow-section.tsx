import { FollowSuggestion } from "./follow-suggestion";

// components/right-sidebar/FollowSection.tsx
export const FollowSection = () => {
  const suggestedUsers = [
    {
      name: "Jane Cooper",
      handle: "jane_cooper",
      avatar: "/api/placeholder/32/32",
    },
    {
      name: "Wade Warren",
      handle: "wade_warren",
      avatar: "/api/placeholder/32/32",
    },
  ];

  return (
    <div className="rounded-xl bg-muted/50 p-4">
      <h2 className="font-bold text-xl mb-4">Who to follow</h2>
      <div className="space-y-4">
        {suggestedUsers.map((user, index) => (
          <FollowSuggestion key={index} {...user} />
        ))}
      </div>
    </div>
  );
};
