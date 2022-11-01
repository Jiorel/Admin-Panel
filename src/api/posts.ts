import { AddPost, PatchPost } from "types";
import { axiosInstance } from "utils";

export async function getPosts() {
  const { data } = await axiosInstance.get("/posts");
  return data;
}

export async function getPostById(id: number) {
  const { data } = await axiosInstance.get(`/posts/${id}`);
  return data;
}

export async function addPost(params: AddPost) {
  const { data } = await axiosInstance.post("/posts", params);
  return data;
}

export async function patchPost(id: number, params: PatchPost) {
  const { data } = await axiosInstance.patch(`/posts/${id}`, params);
  return data;
}

export async function deletePost(id: number) {
  const { data } = await axiosInstance.delete(`/posts/${id}`);
  return data;
}
