import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from "api";
import { Button, Loader, Container, Col, Row } from "ebs-design";
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

  if (isLoading) return <Loader loading />;

  return (
    <div className="posts">
      <Container>
        <div className="posts__header">
          <Button type="primary" onClick={handleAddPostClick}>
            Add post
          </Button>
        </div>
        <Row g={3} size={4}>
          {data.map((post: Post, index: number) => (
            <Col key={index}>
              <PostCard post={post} onDelete={deleteMutation} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
