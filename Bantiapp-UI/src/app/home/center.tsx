import { PostCreationForm } from "@/components/post/post-creation-form";
import { PostItem } from "@/components/post/post-item";
import { Post, User } from "@/types/api";

export default function CenterPage() {
  const fixedDate = "2024-12-03T00:00:00Z";

  const testUser: User = {
    username: "Mike tygress",
    avatar: "/placeholder/2/2",
    id: "1",
    email: "",
    followersCount: 0,
    followingCount: 0,
    createdAt: fixedDate,
    handle: "mike_tygress",
  };

  const post: Post = {
    content: `Test post \n plenty lorem ipsum write up just to fill up the space and see what it looks \n like having a lot of text data on the page. If that is okay then this is fine as well Martini 𓅪
 reposted your post
Everybody is now asking why a priest should have a gun.
Not long ago a church was attacked in Owo and everybody asked why the priest didn't have a gun.

The duality of man.`,
    author: testUser,
    createdAt: fixedDate,
    id: "",
    likes: 1530,
    comments: 0,
    isLiked: false,
    retweets: 0,
  };

  interface postDataInterface {
    content: string;
    media?: File[];
    link?: string;
  }
  const handlePostCreation = async (data: postDataInterface) => {
    console.log(data);
  };
  return (
    <>
      <PostCreationForm
        user={{
          avatar: "",
          username: "Jeremy Kettle",
        }}
        onSubmit={handlePostCreation}
      />
      <PostItem
        id={post.id}
        content={post.content}
        post={post}
        initialMetrics={{
          likes: post.likes,
          retweets: post.retweets,
          replies: post.comments,
        }}
        author={post.author}
        createdAt={new Date(post.createdAt)}
      />
    </>
  );
}
