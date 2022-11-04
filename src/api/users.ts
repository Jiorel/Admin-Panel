import { AddUser, PatchUser } from "types";
import { axiosInstance } from "./axios";

export async function getUsers() {
  const { data } = await axiosInstance.get("/users");
  return data;
}

export async function getUserById(id: number) {
  const { data } = await axiosInstance.get(`/users/${id}`);
  return data;
}

export async function addUser(params: AddUser) {
  const { data } = await axiosInstance.post("/users", params);
  return data;
}

export async function patchUser(id: number, params: PatchUser) {
  const { data } = await axiosInstance.patch(`/users/${id}`, params);
  return data;
}

export async function deleteUser(id: number) {
  const { data } = await axiosInstance.delete(`/users/${id}`);
  return data;
}
