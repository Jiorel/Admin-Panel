import { useMutation } from "@tanstack/react-query";
import { useUserQuery } from "hooks/queries";
import { useState, useEffect } from "react";
import { Button, Input, Select, Modal } from "ebs-design";
import * as api from "api";
import { genderSelectOptions } from "config";
import { AddUser, PatchUser, Role } from "types";
import "./UserFormModal.scss";

interface UserFormProps {
  id: number | null;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSuccess: () => void;
}

export function UserFormModal({
  id,
  isOpen,
  setIsOpen,
  onSuccess,
}: UserFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("masculin");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("MODERATOR");
  const [error, setError] = useState("");

  const postQuery = useUserQuery(id);

  const { mutate } = useMutation(
    (params: AddUser | PatchUser) =>
      id ? api.patchUser(id, params) : api.addUser(params as AddUser),
    {
      onSuccess: () => {
        setIsOpen(false);
        onSuccess();
        resetFormInputs();
      },
      onError: (error: any) => setError(error.response.data),
    }
  );

  const handleSubmit = () => {
    const userParams = id
      ? { fullName, email, gender, role }
      : { fullName, email, gender, role, password };
    mutate(userParams);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    resetFormInputs();
  };

  const resetFormInputs = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setGender("masculin");
    setRole("MODERATOR");
    setError("");
  };

  useEffect(() => {
    if (!postQuery.data) return;
    const { fullName, email, gender, role } = postQuery.data;

    setFullName(fullName);
    setEmail(email);
    setGender(gender);
    setRole(role);
  }, [postQuery.data]);

  const roleSelectOptions = [
    { value: "ADMINISTRATOR", text: "ADMINISTRATOR" },
    { value: "MODERATOR", text: "MODERATOR" },
  ];

  return (
    <Modal
      title={`${id ? "Edit" : "Create"} user`}
      open={isOpen}
      onClose={handleModalClose}
    >
      <div className="user-form">
        <div className="user-form__content">
          <Input
            type="text"
            placeholder="FullName"
            value={fullName}
            required
            onChange={(value) => setFullName(value as string)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(value) => setEmail(value as string)}
          />
          <Select
            options={genderSelectOptions}
            value={gender}
            onChange={(value) => setGender(value as string)}
          />
          <Select
            options={roleSelectOptions}
            value={role}
            onChange={(value) => setRole(value as Role)}
          />

          {id ? (
            <div />
          ) : (
            <Input
              type="text"
              placeholder="Password"
              value={password}
              required
              onChange={(value) => setPassword(value as string)}
            />
          )}

          <Button type="primary" onClick={handleSubmit}>
            {id ? "Edit" : "Create"}
          </Button>
        </div>
        {error && <div className="form__error error">{error}</div>}
      </div>
    </Modal>
  );
}
