import { axiosInstance } from "../utils";

export async function getUsers() {
  const { data } = await axiosInstance.get("/users");
  return data;
}
