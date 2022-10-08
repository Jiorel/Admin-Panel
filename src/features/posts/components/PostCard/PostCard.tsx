import { Post } from "../../../../types";
import { Button } from "../../../../components";
import { useHistory } from "react-router-dom";
import "./PostCard.scss";

interface PostCardProps {
  post: Post;
  onDelete: (postId: number) => any;
}

export function PostCard({ post, onDelete }: PostCardProps) {
  const { title, description, image, date, author } = post;
  const history = useHistory();

  return (
    <div className="post-card">
      <div
        className="post-card__image"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="post-card__content-wrapper">
        <div className="post-card__title">{title}</div>
        <div className="post-card__author">{author}</div>
        <div className="post-card__description">{description}</div>
        <div className="post-card__date">{date}</div>
      </div>
      <div className="post-card__controls">
        <Button
          variant="primary"
          onClick={() => history.push("/posts/edit/" + post.id)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(post.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
