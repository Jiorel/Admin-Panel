import { Role } from "./user";

export interface Login {
  email: string;
  password: string;
}

export interface Signup extends Login {
  fullName: string;
  gender: string;
  role: Role;
}
