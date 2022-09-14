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

  const handleSignUp = () => {
    if (password === confirmPassword) {
      console.log(password);
    }
  };

  const genderSelectOptions = ["Masculin", "Femenin", "Ma abtin"];

  return (
    <AuthCard title="Sign Up" link="/login" linkTitle="Log In">
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
      <Button variant="primary" onClick={handleSignUp}>
        Sign Up
      </Button>
    </AuthCard>
  );
}
