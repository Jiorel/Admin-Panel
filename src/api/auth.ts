import { axiosInstance } from "../utils";
import { LoginParams, SignupParams } from "../types";

export function login(data: LoginParams) {
  return axiosInstance.post("/login", data);
}

export function signup(data: SignupParams) {
  return axiosInstance.post("/signup", data);
}
