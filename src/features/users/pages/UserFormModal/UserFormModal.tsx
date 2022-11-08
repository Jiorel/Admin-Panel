import { useMutation } from "@tanstack/react-query";
import { useUserQuery } from "hooks/queries";
import { useState, useEffect } from "react";
import * as api from "api";
import { Button, Input, Modal, Select } from "components";
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
    { label: "Administrator", value: "ADMINISTRATOR" },
    { label: "Moderator", value: "MODERATOR" },
  ];

  return (
    <Modal
      show={isOpen}
      title={`${id ? "Edit" : "Create"} user`}
      onClose={handleModalClose}
    >
      <div className="user-form">
        <div className="user-form__content">
          <Input
            type="text"
            placeholder="FullName"
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select
            options={genderSelectOptions}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Select
            options={roleSelectOptions}
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
          />

          {id ? (
            <div />
          ) : (
            <Input
              type="text"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          <Button variant="primary" onClick={handleSubmit}>
            {id ? "Edit" : "Create"}
          </Button>
        </div>
        {error && <div className="form__error error">{error}</div>}
      </div>
    </Modal>
  );
}
