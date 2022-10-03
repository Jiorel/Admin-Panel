// import { useEffect, useState } from "react";
import * as api from "../../../../api";
import { Button } from "../../../../components";
// import { AddPostParams, PatchPostParams, Post } from "../../../../types";
import { PostCard } from "../../components";
import { useQuery } from "@tanstack/react-query";
import "./Posts.scss";

export function Posts() {
  // const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading } = useQuery(["getPosts"], api.getPosts);

  // async function addPost(data: AddPostParams) {
  //   const response = await api.addPost(data);

  //   if (response.status > 400) {
  //     throw new Error("Couldn't create post");
  //   }

  //   setPosts([...posts, response.data]);
  // }

  // async function patchPost(id: number, data: PatchPostParams) {
  //   const response = await api.patchPost(id, data);

  //   if (response.status > 400) {
  //     throw new Error("Couldn't patch post");
  //   }

  //   const newPosts = [...posts];

  //   const postIndex = newPosts.findIndex((post) => post.id === id);
  //   newPosts[postIndex] = response.data;

  //   setPosts(newPosts);
  // }

  // async function deletePost(id: number) {
  //   const response = await api.deletePost(id);

  //   if (response.status > 400) {
  //     throw new Error("Couldn't delete post");
  //   }

  //   setPosts(posts.filter((post) => post.id !== id));
  // }

  if (isLoading) return null;

  return (
    <div className="posts">
      <div className="posts__header">
        <Button variant="primary">Add post</Button>
      </div>
      <div className="posts__content">
        {data.map((post: any, index: number) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
