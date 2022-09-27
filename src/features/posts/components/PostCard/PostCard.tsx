import { Post } from "../../../../types";
import "./PostCard.scss";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { title, description, image, date, author } = post;
  return (
    <div className="post-card">
      <div
        className="post-card__image"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="post-card__content-wrapper">
        <div className="post-card__title">{title}</div>
        <div className="post-card__date">{date}</div>
        <div className="post-card__author">{author}</div>
        <div className="post-card__description">{description}</div>
      </div>
    </div>
  );
}
