import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "contexts";
import { AuthCard } from "../components";
import { Input, Button } from "components";

export function LogIn() {
  const history = useHistory();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: () => history.push("/posts"),
    onError: (error: any) => setError(error.response.data),
  });

  const handleLogin = () => {
    mutate({ email, password });
  };

  return (
    <AuthCard title="Log In" link="/signup" linkTitle="Sign Up" error={error}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="primary" onClick={handleLogin} disabled={isLoading}>
        Log In
      </Button>
    </AuthCard>
  );
}
