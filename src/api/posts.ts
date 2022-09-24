import { AddPostParams, PatchPostParams } from "../types";
import { request } from "../utils";

export function getPosts() {
  return request("/posts");
}

export function addPost(data: AddPostParams) {
  return request("/posts", { method: "POST", data });
}

export function patchPost(id: number, data: PatchPostParams) {
  return request("/posts/" + id, { method: "PATCH", data });
}

export function deletePost(id: number) {
  return request("/posts/" + id, { method: "DELTE" });
}
