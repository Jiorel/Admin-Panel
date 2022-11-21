import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { usePostQuery } from "hooks/queries";
import { Input, DatePicker, Button, Form } from "ebs-design";
import * as api from "api";
import { EditPost, PatchPost } from "types";
import "./PostForm.scss";

export function PostForm() {
  const history = useHistory();
  const { id } = useParams<EditPost>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [standartDate, setStandartDate] = useState<Date | null>(new Date());
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
      date: standartDate!.toLocaleString(),
    });
  }

  useEffect(() => {
    if (!postQuery.data) return;
    const { title, date, description, image, author } = postQuery.data;

    setTitle(title);
    setDescription(description);
    setImage(image);
    setStandartDate(new Date(date));
    setAuthor(author);
  }, [postQuery.data]);

  return (
    <Form className="post-form">
      <div className="post-form__content">
        <Input
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={(value) => setTitle(value as string)}
        />
        <Input
          type="text"
          required
          placeholder="Description"
          value={description}
          onChange={(value) => setDescription(value as string)}
        />
        <Input
          type="text"
          required
          placeholder="Image"
          value={image}
          onChange={(value) => setImage(value as string)}
        />
        <DatePicker
          selected={standartDate}
          onChange={(date) => setStandartDate(date as Date)}
        />
        <Input
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={(value) => setAuthor(value as string)}
        />
        <Button type="primary" onClick={handleSubmit}>
          {id ? "Edit" : "Create"} Post
        </Button>
      </div>
      {error && <div className="create-post__error">{error}</div>}
    </Form>
  );
}
