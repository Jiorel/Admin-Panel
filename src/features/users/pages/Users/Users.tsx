import { useQuery } from "@tanstack/react-query";
import * as api from "../../../../api";
import { Button } from "../../../../components";
import { useAuth } from "../../../../contexts";
import { User } from "../../../../types";
import "./Users.scss";

export function Users() {
  const { user } = useAuth();
  const { data, isLoading } = useQuery(["users"], api.getUsers);

  if (isLoading || user === null) return null;

  return (
    <div className="users">
      <div className="users-content">
        <table className="users-content__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Role</th>
              {user.role === "ADMINISTRATOR" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({ id, email, fullName, gender, role }: User, index: number) => {
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{email}</td>
                    <td>{fullName}</td>
                    <td>{gender}</td>
                    <td>{role}</td>
                    {user.role === "ADMINISTRATOR" && (
                      <td className="users-content__table__actions">
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                      </td>
                    )}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
