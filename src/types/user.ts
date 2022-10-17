export type Role = "MODERATOR" | "ADMINISTRATOR";

export interface User {
  id: number;
  fullName: string;
  email: string;
  gender: string;
  role: Role;
}
