import { useState } from "react";
import { AuthCard } from "../../components";
import { Input, Button } from "../../../../components";
import axios from "axios";
import "./LogIn.scss";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogIn = async () => {
    if (password === "") {
      setError("Password is invalid");
      return;
    }

    if (email === "") {
      setError("Email is invalid");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const requestUrl = "http://localhost:8000/login";
      const requestData = { email, password };
      await axios.post(requestUrl, requestData);
    } catch (error) {
      // setError(error.response.data);
    } finally {
      setLoading(false);
    }
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
      <Button variant="primary" onClick={handleLogIn} disabled={loading}>
        Log In
      </Button>
    </AuthCard>
  );
}
