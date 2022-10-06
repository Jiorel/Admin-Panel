import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../../../api";
import { Input, DatePicker, Button } from "../../../../components";
import "./CreatePost.scss";

export function CreatePost() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const { mutate } = useMutation(api.addPost, {
    onSuccess: () => {
      history.push("/posts");
    },
  });

  const handleCreatePost = () => {
    if (!title || !description || !author || !image) {
      setError("Please fill in all the inputs above");
      return;
    }

    mutate({
      title,
      description,
      image,
      author,
      date: date.toLocaleDateString(),
    });
  };

  return (
    <div className="create-post">
      <div className="create-post__form">
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <DatePicker selected={date} onChange={(date: Date) => setDate(date)} />
        <Input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button variant="primary" onClick={handleCreatePost}>
          Create Post
        </Button>
      </div>
      {error && <div className="create-post__error">{error}</div>}
    </div>
  );
}
