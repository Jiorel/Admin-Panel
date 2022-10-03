import { AddPostParams, PatchPostParams } from "../types";
import { axiosInstance } from "../utils";

export async function getPosts() {
  const { data } = await axiosInstance.get("/posts");
  return data;
}

export function addPost(data: AddPostParams) {
  return axiosInstance.post("/posts", data);
}

export function patchPost(id: number, data: PatchPostParams) {
  return axiosInstance.patch("/posts/" + id, data);
}

export function deletePost(id: number) {
  return axiosInstance.delete("/posts/" + id);
}
