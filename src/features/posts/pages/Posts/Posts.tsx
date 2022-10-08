import { useHistory } from "react-router-dom";
import * as api from "../../../../api";
import { Button } from "../../../../components";
import { PostCard } from "../../components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Post } from "../../../../types";
import "./Posts.scss";

export function Posts() {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["posts"], api.getPosts);

  const { mutate } = useMutation(api.deletePost, {
    onSuccess: (_, postId) => {
      const newPosts = data.filter((post: Post) => post.id !== postId);
      queryClient.setQueryData(["posts"], newPosts);
    },
  });

  const handleAddPostClick = () => {
    history.push("/posts/create");
  };

  if (isLoading) return null;

  return (
    <div className="posts">
      <div className="posts__header">
        <Button variant="primary" onClick={handleAddPostClick}>
          Add post
        </Button>
      </div>
      <div className="posts__content">
        {data.map((post: any, index: number) => (
          <PostCard key={index} post={post} onDelete={mutate} />
        ))}
      </div>
    </div>
  );
}
