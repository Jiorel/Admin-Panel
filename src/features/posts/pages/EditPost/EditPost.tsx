import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import * as api from "../../../../api";
import { Input, DatePicker, Button } from "../../../../components";
import "./EditPost.scss";

interface EditPostParams {
  id: string;
}

export function EditPost() {
  const history = useHistory();
  const { id } = useParams<EditPostParams>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const { data, isLoading } = useQuery(["post", parseInt(id)], () =>
    api.getPostById(parseInt(id))
  );

  const { mutate } = useMutation(
    (params) => api.patchPost(parseInt(id), params as any),
    {
      onSuccess: () => {
        history.push("/posts");
      },
    }
  );

  const handleEditPost = () => {
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
    } as any);
  };

  useEffect(() => {
    if (!data) return;
    setTitle(data.title);
    setDescription(data.description);
    setImage(data.image);
    setDate(new Date(data.date));
    setAuthor(data.author);
  }, [data]);

  if (isLoading) return null;

  return (
    <div className="edit-post">
      <div className="edit-post__form">
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
        <Button variant="primary" onClick={handleEditPost}>
          Edit Post
        </Button>
      </div>
      {error && <div className="edit-post__error">{error}</div>}
    </div>
  );
}
