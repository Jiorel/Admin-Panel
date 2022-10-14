import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import * as api from "../../../../api";
import { Input, DatePicker, Button } from "../../../../components";
import { EditPostParams, PatchPostParams } from "../../../../types";
import "./PostForm.scss";

interface PostFormProps {
  isEdit?: boolean;
}

export function PostForm({ isEdit = false }: PostFormProps) {
  const history = useHistory();
  const { id } = useParams<EditPostParams>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [author, setAuthor] = useState("");

  const postId = isEdit ? parseInt(id) : null;
  const postQuery = api.usePostQuery(postId);

  const { mutate: createMutation } = useMutation(api.addPost, {
    onSuccess: () => history.push("/posts"),
  });

  const { mutate: editMutation } = useMutation(
    (params: PatchPostParams) => api.patchPost(parseInt(id), params),
    { onSuccess: () => history.push("/posts") }
  );

  useEffect(() => {
    if (!postQuery.data) return;
    const { title, date, description, image, author } = postQuery.data;

    setTitle(title);
    setDescription(description);
    setImage(image);
    setDate(new Date(date));
    setAuthor(author);
  }, [postQuery.data]);

  if (postQuery.isLoading) return null;

  return (
    <div className="post-form">
      <div className="post-form__content">
        <Input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Image"
          value={image}
          required
          onChange={(e) => setImage(e.target.value)}
        />
        <DatePicker selected={date} onChange={(date: Date) => setDate(date)} />
        <Input
          type="text"
          placeholder="Author"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button
          variant="primary"
          onClick={() =>
            isEdit
              ? editMutation({
                  title,
                  description,
                  image,
                  author,
                  date: date.toLocaleDateString(),
                } as any)
              : createMutation({
                  title,
                  description,
                  image,
                  author,
                  date: date.toLocaleDateString(),
                })
          }
        >
          {isEdit ? "Edit" : "Create"} Post
        </Button>
      </div>
    </div>
  );
}
