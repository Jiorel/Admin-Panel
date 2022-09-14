import { useState } from "react";
import { AuthCard } from "../../components";
import { Input, Button } from "../../../../components";
import "./LogIn.scss";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    console.log(password, email);
  };

  return (
    <AuthCard title="Log In" link="/signup" linkTitle="Sign Up">
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
      <Button variant="primary" onClick={handleLogIn}>
        Log In
      </Button>
    </AuthCard>
  );
}
