import { useState } from "react";
import { Input, Button } from "../../../components";
import { Link } from "react-router-dom";
import "./LogIn.css";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    console.log(password, email);
  };

  return (
    <div className="login-menu">
      <div className="login-menu__header">
        <span className="login-menu__header__title">Log In</span>
        <Link className="login-menu__header__signup-link" to="/signup">
          Sign Up
        </Link>
      </div>
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
      <Button type="primary" onClick={handleLogIn}>
        Log In
      </Button>
    </div>
  );
};
