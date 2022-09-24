import * as api from "../api";
import React, { createContext, useState, useEffect, useContext } from "react";
import { AddPostParams, PatchPostParams, Post } from "../types";

interface PostContextValue {
  posts: Post[];
  addPost: (data: AddPostParams) => any;
  patchPost: (id: number, data: PatchPostParams) => any;
  deletePost: (id: number) => any;
}

const PostContext = createContext<PostContextValue>({
  posts: [],
  addPost: () => void 0,
  patchPost: () => void 0,
  deletePost: () => void 0,
});

export function usePosts() {
  return useContext(PostContext);
}

export function PostProvider({ children }: React.PropsWithChildren) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getPosts() {
    const response = await api.getPosts();

    if (response.status > 400) {
      throw new Error("Couldn't get posts");
    }
    console.log(response.data);
    setPosts(response.data);
  }

  async function addPost(data: AddPostParams) {
    const response = await api.addPost(data);

    if (response.status > 400) {
      throw new Error("Couldn't create post");
    }

    setPosts([...posts, response.data]);
  }

  async function patchPost(id: number, data: PatchPostParams) {
    const response = await api.patchPost(id, data);

    if (response.status > 400) {
      throw new Error("Couldn't patch post");
    }

    const newPosts = [...posts];

    const postIndex = newPosts.findIndex((post) => post.id === id);
    newPosts[postIndex] = response.data;

    setPosts(newPosts);
  }

  async function deletePost(id: number) {
    const response = await api.deletePost(id);

    if (response.status > 400) {
      throw new Error("Couldn't delete post");
    }

    setPosts(posts.filter((post) => post.id !== id));
  }

  useEffect(() => {
    getPosts();
  }, []);

  const value = { posts, addPost, patchPost, deletePost };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
