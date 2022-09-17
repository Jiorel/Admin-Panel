import { useState } from "react";
import { AuthCard } from "../../components";
import { Input, Button, Select } from "../../../../components";
import "./SignUp.scss";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("Ma abtin");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (password === "") return setError("Invalid password");
    if (password !== confirmPassword) return setError("Passwords don't match");
    if (email === "") return setError("Invalid email");
    if (fullName === "") return setError("Insert your full name");

    setLoading(true);
    setError("");
  };

  const genderSelectOptions = ["Masculin", "Femenin", "Ma abtin"];

  return (
    <AuthCard title="Sign Up" link="/login" linkTitle="Log In" error={error}>
      <Input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button variant="primary" onClick={handleSignUp} disabled={loading}>
        Sign Up
      </Button>
    </AuthCard>
  );
}
