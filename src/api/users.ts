import { useQuery } from "@tanstack/react-query";
import { AddUserParams, PatchUserParams } from "../types";
import { axiosInstance } from "../utils";

export async function getUsers() {
  const { data } = await axiosInstance.get("/users");
  return data;
}

export async function getUserById(id: number) {
  const { data } = await axiosInstance.get("/users/" + id);
  return data;
}

export async function addUser(params: AddUserParams) {
  const { data } = await axiosInstance.post("/users", params);
  return data;
}

export async function patchUser(id: number, params: PatchUserParams) {
  const { data } = await axiosInstance.patch("/users/" + id, params);
  return data;
}

export async function deleteUser(id: number) {
  const { data } = await axiosInstance.delete("/users/" + id);
  return data;
}

export function useUserQuery(id: number | null) {
  return useQuery(["user", id], () => (id ? getUserById(id) : null));
}
