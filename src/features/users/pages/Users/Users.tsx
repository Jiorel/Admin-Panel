import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import * as api from "api";
import { Button, LoadingSpinner, Modal } from "components";
import { useAuth } from "contexts";
import { User } from "types";
import "./Users.scss";

export function Users() {
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);

  const queryClient = useQueryClient();

  const { user } = useAuth();
  const { data, isLoading } = useQuery(["users"], api.getUsers);

  const { mutate: deleteMutation } = useMutation(api.deleteUser, {
    onSuccess: (_, userId) => {
      const newUsers = data.filter((user: User) => user.id !== userId);
      queryClient.setQueryData(["users"], newUsers);
    },
  });

  if (isLoading || user === null) return <LoadingSpinner />;

  const isAdministrator = user.role === "ADMINISTRATOR";

  return (
    <div className="users">
      <div className="users-header">
        {isAdministrator && (
          <Button variant="primary" onClick={Toggle}>
            Add User
          </Button>
        )}
        <Modal show={modal} title="My Modal" close={Toggle}>
          Add User
        </Modal>
      </div>
      <div className="users-content">
        <table className="users-content__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Role</th>
              {isAdministrator && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({ id, fullName, email, gender, role }: User, index: number) => {
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>{role}</td>
                    {isAdministrator && (
                      <td className="users-content__table__actions">
                        <Button variant="primary" onClick={Toggle}>
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => deleteMutation(id)}
                        >
                          Delete
                        </Button>
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
