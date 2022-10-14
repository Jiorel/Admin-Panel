export interface LoginParams {
  email: string;
  password: string;
}

export interface SignupParams {
  email: string;
  password: string;
  fullName: string;
  gender: string;
  role: "MODERATOR" | "ADMINISTRATOR";
}
