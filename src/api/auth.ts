import { LoginParams, SignupParams } from "../types";
import { axiosInstance } from "../utils";

export function login(data: LoginParams) {
  return axiosInstance.post("/login", data);
}

export function signup(data: SignupParams) {
  return axiosInstance.post("/signup", data);
}
