import { useAuth } from "contexts";
import { Button } from "../../Button/Button";
import "./Navbar.scss";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <h1 className="navbar__user">{user?.fullName}</h1>
      <Button variant="primary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
