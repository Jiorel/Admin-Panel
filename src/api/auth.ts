import { Login, Signup } from "types";
import { axiosInstance } from "utils";

export function login(data: Login) {
  return axiosInstance.post("/login", data);
}

export function signup(data: Signup) {
  return axiosInstance.post("/signup", data);
}
