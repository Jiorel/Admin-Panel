export type Role = "MODERATOR" | "ADMINISTRATOR";

export interface User {
  id: number;
  fullName: string;
  email: string;
  gender: string;
  role: Role;
}

export interface AddUserParams {
  fullName: string;
  email: string;
  gender: string;
  role: Role;
  password: string;
}

export interface PatchUserParams {
  fullName: string;
  email: string;
  gender: string;
  role: Role;
}

export interface EditUserParams {
  id: string;
}
