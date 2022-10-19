import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Input, Button, Select } from "../../../components";
import { useAuth } from "../../../contexts";
import { AuthCard } from "../components";
import { genderSelectOptions } from "../../../config";

export function SignUp() {
  const { signup } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("none");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (password !== confirmPassword) return setError("Passwords don't match");
    if (fullName === "") return setError("Insert your full name");

    setLoading(true);
    setError("");

    try {
      await signup({ email, password, fullName, gender, role: "MODERATOR" });
      history.push("/");
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.response?.data as string);
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Sign Up" link="/login" linkTitle="Log In" error={error}>
      <Input
        type="text"
        placeholder="Full name"
        value={fullName}
        required
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Select
        value={gender}
        options={genderSelectOptions}
        onChange={(e) => setGender(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="primary" onClick={handleSignUp} disabled={loading}>
        Sign Up
      </Button>
    </AuthCard>
  );
}
