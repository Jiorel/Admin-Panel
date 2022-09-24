import { AddPostParams, UpdatePostParams } from "../types";
import { request } from "../utils";

export function getPosts() {
  return request("/posts");
}

export function addPost(data: AddPostParams) {
  return request("/posts", { method: "POST", data });
}

export function updatePost(id: string, data: UpdatePostParams) {
  return request("/posts/" + id, { method: "PUT", data });
}

export function deletePost(id: string) {
  return request("/posts/" + id, { method: "DELTE" });
}
