import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from "api";
import { Button, LoadingSpinner } from "components";
import { Post } from "types";
import { PostCard } from "../../components";
import "./Posts.scss";

export function Posts() {
  const history = useHistory();

  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["posts"], api.getPosts);

  const { mutate: deleteMutation } = useMutation(api.deletePost, {
    onMutate: async (postId) => {
      const newPosts = data.filter((post: Post) => post.id !== postId);
      queryClient.setQueryData(["posts"], newPosts);
    },
  });

  const handleAddPostClick = () => {
    history.push("/posts/create");
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="posts">
      <div className="posts__header">
        <Button variant="primary" onClick={handleAddPostClick}>
          Add post
        </Button>
      </div>
      <div className="posts__content">
        {data.map((post: Post, index: number) => (
          <PostCard key={index} post={post} onDelete={deleteMutation} />
        ))}
      </div>
    </div>
  );
}
