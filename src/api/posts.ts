import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AddPostParams, PatchPostParams } from "../types";
import { axiosInstance } from "../utils";

export async function getPosts() {
  const { data } = await axiosInstance.get("/posts");
  return data;
}

export async function getPostById(id: number) {
  const { data } = await axiosInstance.get("/posts/" + id);
  return data;
}

export async function addPost(params: AddPostParams) {
  const { data } = await axiosInstance.post("/posts", params);
  return data;
}

export async function patchPost(id: number, params: PatchPostParams) {
  const { data } = await axiosInstance.patch("/posts/" + id, params);
  return data;
}

export async function deletePost(id: number) {
  const { data } = await axiosInstance.delete("/posts/" + id);
  return data;
}

// Queries

export function usePostQuery(id: number | null) {
  return useQuery(["post", id], () => (id ? getPostById(id) : null));
}
