import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { usePostQuery } from "hooks/queries";
import * as api from "api";
import { Input, DatePicker, Button } from "components";
import { EditPost, PatchPost } from "types";
import "./PostForm.scss";

export function PostForm() {
  const history = useHistory();
  const { id } = useParams<EditPost>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const postId = id ? parseInt(id) : null;
  const postQuery = usePostQuery(postId);

  const { mutate } = useMutation(
    (params: PatchPost) =>
      id ? api.patchPost(parseInt(id), params) : api.addPost(params),
    {
      onSuccess: () => history.push("/posts"),
    }
  );

  function handleSubmit() {
    if (!title || !description || !author || !image) {
      setError("Please fill in all the inputs");
      return;
    }

    mutate({
      title,
      description,
      image,
      author,
      date: date.toLocaleDateString(),
    });
  }

  useEffect(() => {
    if (!postQuery.data) return;
    const { title, date, description, image, author } = postQuery.data;

    setTitle(title);
    setDescription(description);
    setImage(image);
    setDate(new Date(date));
    setAuthor(author);
  }, [postQuery.data]);

  return (
    <div className="post-form">
      <div className="post-form__content">
        <Input
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          required
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          required
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <DatePicker selected={date} onChange={(date: Date) => setDate(date)} />
        <Input
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button variant="primary" onClick={handleSubmit}>
          {id ? "Edit" : "Create"} Post
        </Button>
      </div>
      {error && <div className="create-post__error">{error}</div>}
    </div>
  );
}
