import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faBox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";

export function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/dashboard">
        <FontAwesomeIcon icon={faTableColumns} />
        Dashboard
      </NavLink>
      <NavLink to="/posts">
        <FontAwesomeIcon icon={faBox} />
        Posts
      </NavLink>
      <NavLink to="/users">
        <FontAwesomeIcon icon={faUser} />
        Users
      </NavLink>
    </div>
  );
}
