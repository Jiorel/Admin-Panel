import { request } from "../utils";
import { LoginParams, SignupParams } from "../types";

export function login(data: LoginParams) {
  return request("/login", { method: "POST", data });
}

export function signup(data: SignupParams) {
  return request("/signup", { method: "POST", data });
}
