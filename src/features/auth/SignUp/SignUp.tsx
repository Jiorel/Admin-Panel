import { useState } from "react";
import { Input, Button } from "../../../components";
import { Link } from "react-router-dom";
import "./SignUp.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password === confirmPassword) {
      console.log(password);
    }
  };

  return (
    <div className="signup-menu">
      <div className="signup-menu__header">
        <span className="signup-menu__header__title">Sign Up</span>
        <Link className="signup-menu__header__login-link" to="/login">
          Log In
        </Link>
      </div>
      <Input
        type="text"
        placeholder="Full name"
        value={fullName}
        onChange={setFullName}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />
      <Button type="primary" onClick={handleSignUp}>
        Sign Up
      </Button>
    </div>
  );
};
