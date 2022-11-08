export type Role = "MODERATOR" | "ADMINISTRATOR";

export interface User {
  id: number;
  fullName: string;
  email: string;
  gender: string;
  role: Role;
}

export interface AddUser extends Omit<User, "id"> {
  password: string;
}

export interface PatchUser extends Omit<User, "id"> {}
