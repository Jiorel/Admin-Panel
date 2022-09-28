import { AddPostParams, PatchPostParams } from "../types";
import { axiosInstance } from "../utils";

export function getPosts() {
  return axiosInstance.get("/posts");
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
