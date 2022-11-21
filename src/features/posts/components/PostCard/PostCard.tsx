import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Button, Card, Modal } from "ebs-design";
import { Post } from "types";
import "./PostCard.scss";

interface PostCardProps {
  post: Post;
  onDelete: (postId: number) => any;
  isConfirmOpen?: boolean;
  setIsConfirmOpen?: (value: boolean) => void;
}

export function PostCard({
  post: { id, title, description, image, date, author },
  onDelete,
}: PostCardProps) {
  const history = useHistory();

  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDeletePost = () => {
    onDelete(id);
    history.push("/posts");
  };

  return (
    <>
      <Card className="post-card" size="medium" collapsed={false}>
        <img
          className="post-card__image"
          style={{ backgroundImage: `url("${image}")` }}
          alt=""
        />
        <div className="post-card__content">
          <h2 className="post-card__title">{title}</h2>
          <h3 className="post-card__author">{author}</h3>
          <p className="post-card__description">{description}</p>
          <h3 className="post-card__date">{date}</h3>
        </div>
        <div className="post-card__controls">
          <Button
            type="primary"
            onClick={() => history.push("/posts/edit/" + id)}
          >
            Edit
          </Button>

          <Button type="dark" onClick={() => setConfirmOpen(true)}>
            Delete
          </Button>
        </div>
      </Card>

      <Modal
        className="post-card__delete-modal"
        open={confirmOpen}
        title="Are you sure that you want to delete this post?"
        onClose={() => setConfirmOpen(false)}
      >
        <div className="post-card__delete-modal__footer">
          <Button type="primary" onClick={handleDeletePost}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
}
