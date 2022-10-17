import { useHistory } from "react-router-dom";
import { Button } from "../../../../components";
import { Post } from "../../../../types";
import "./PostCard.scss";

interface PostCardProps {
  post: Post;
  onDelete: (postId: number) => any;
}

export function PostCard({
  post: { id, title, description, image, date, author },
  onDelete,
}: PostCardProps) {
  const history = useHistory();

  return (
    <div className="post-card">
      <img
        className="post-card__image"
        style={{ backgroundImage: `url("${image}")` }}
        alt=""
      />
      <div className="post-card__content-wrapper">
        <h1 className="post-card__title">{title}</h1>
        <h3 className="post-card__author">{author}</h3>
        <p className="post-card__description">{description}</p>
        <span className="post-card__date">{date}</span>
      </div>
      <div className="post-card__controls">
        <Button
          variant="primary"
          onClick={() => history.push("/posts/edit/" + id)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
