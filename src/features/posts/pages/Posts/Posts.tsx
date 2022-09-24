import { usePosts } from "../../../../contexts";
import { PostCard } from "../../components";
import "./Posts.scss";

export function Posts() {
  const { posts } = usePosts();

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
