import { request } from "../utils";

interface LoginParams {
  email: string;
  password: string;
}

export function login(data: LoginParams) {
  return request("/login", { method: "POST", data });
}

interface SignupParams {
  email: string;
  password: string;
  fullName: string;
  gender: string;
}

export function signup(data: SignupParams) {
  return request("/signup", { method: "POST", data });
}
