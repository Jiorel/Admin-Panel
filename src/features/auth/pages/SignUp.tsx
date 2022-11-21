import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button, Input, Select } from "ebs-design";
import { genderSelectOptions } from "config";
import { useAuth } from "contexts";
import { AuthCard } from "../components";

export function SignUp() {
  const { signup } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("none");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { mutate, isLoading } = useMutation(signup, {
    onSuccess: () => history.push("/"),
    onError: (error: any) => setError(error.response.data),
  });

  const handleSignUp = async () => {
    if (password !== confirmPassword) return setError("Passwords don't match");
    if (fullName === "") return setError("Insert your full name");

    mutate({ fullName, email, gender, role: "MODERATOR", password });
  };

  return (
    <AuthCard title="Sign Up" link="/login" linkTitle="Log In" error={error}>
      <Input
        type="text"
        placeholder="Full name"
        value={fullName}
        required
        onChange={(value) => setFullName(value as string)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(value) => setEmail(value as string)}
      />
      <Select
        value={gender}
        options={genderSelectOptions}
        onChange={(value) => setGender(value as string)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(value) => setPassword(value as string)}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        required
        onChange={(value) => setConfirmPassword(value as string)}
      />
      <Button type="primary" onClick={handleSignUp} disabled={isLoading}>
        Sign Up
      </Button>
    </AuthCard>
  );
}
