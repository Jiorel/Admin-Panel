import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import * as api from "api";
import Table from "rc-table";
import { Button, Loader, Modal } from "ebs-design";
import { useAuth } from "contexts";
import { User } from "types";
import { UserFormModal } from "../UserFormModal/UserFormModal";
import "./Users.scss";
import { ColumnType } from "rc-table/lib/interface";

export function Users() {
  const queryClient = useQueryClient();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  const { user } = useAuth();
  const { data, isLoading, refetch } = useQuery(["users"], api.getUsers);

  const { mutate: deleteMutation } = useMutation(api.deleteUser, {
    onMutate: async (userId) => {
      const newUsers = data.filter((user: User) => user.id !== userId);
      queryClient.setQueryData(["users"], newUsers);
    },
  });

  const handleEditUser = (id: number) => {
    setEditingUserId(id);
    setIsFormModalOpen(true);
  };

  const handleCreateUser = () => {
    setEditingUserId(null);
    setIsFormModalOpen(true);
  };

  const renderActions = (record: User) => {
    return (
      <div className="users-content__table-actions">
        <Button type="primary" onClick={() => handleEditUser(record.id)}>
          Edit
        </Button>

        <Button type="dark" onClick={() => setIsDeleteModalOpen(true)}>
          Delete
        </Button>

        <Modal
          className="user-delete-modal"
          open={isDeleteModalOpen}
          title="Are you sure that you want to delete this user?"
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <div className="user-delete-modal__footer">
            <Button
              type="primary"
              onClick={() => {
                setIsDeleteModalOpen(false);
                deleteMutation(record.id);
              }}
            >
              Submit
            </Button>
          </div>
        </Modal>
      </div>
    );
  };

  const getTableColumns = () => {
    const columns: ColumnType<User>[] = [
      {
        dataIndex: "id",
        title: "ID",
        key: "id",
      },
      {
        dataIndex: "fullName",
        title: "Full Name",
        key: "fullName",
      },
      {
        dataIndex: "email",
        title: "Email",
        key: "email",
      },
      {
        dataIndex: "gender",
        title: "Gender",
        key: "gender",
      },
      {
        dataIndex: "role",
        title: "Role",
        key: "role",
      },
    ];

    if (isAdministrator) {
      columns.push({
        dataIndex: "actions",
        title: "Actions",
        key: "actions",
        render: (_, record) => renderActions(record),
      });
    }

    return columns;
  };

  if (isLoading || user === null) return <Loader loading />;

  const isAdministrator = user.role === "ADMINISTRATOR";

  return (
    <>
      <UserFormModal
        isOpen={isFormModalOpen}
        setIsOpen={setIsFormModalOpen}
        id={editingUserId}
        onSuccess={refetch}
      />
      <div className="users">
        <div className="users-header">
          {isAdministrator && (
            <Button type="primary" onClick={handleCreateUser}>
              Add User
            </Button>
          )}
        </div>
        <div className="users-content">
          <Table
            columns={getTableColumns()}
            data={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
    </>
  );
}
