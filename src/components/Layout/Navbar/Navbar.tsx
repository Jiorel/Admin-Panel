import { useAuth } from "../../../contexts";
import { Button } from "../../Button/Button";
import "./Navbar.scss";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <div className="navbar__user">{user?.fullName}</div>
      <Button variant="primary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
