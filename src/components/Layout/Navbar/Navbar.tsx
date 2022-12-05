import { useAuth } from "contexts";
import { Avatar, Button } from "ebs-design";
import "./Navbar.scss";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <div className="navbar__user">
        <Avatar
          type="regular"
          img="https://s3.amazonaws.com/TWFiles/328702/userAvatar/tf_ae0f94af-4f65-47f5-bc9e-e5cebb5537e2.photo_2018-08-07_16-57-45.jpg"
          alt="avatar"
          size="big"
        />
        <h1 className="navbar__user">{user?.fullName}</h1>
      </div>
      <Button type="primary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
