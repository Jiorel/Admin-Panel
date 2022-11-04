import { useMutation } from "@tanstack/react-query";
import { useUserQuery } from "hooks/queries";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "api";
import { Button, Input, Select } from "components";
import { genderSelectOptions } from "config";
import { AddUser, EditUser, PatchUser, Role } from "types";
import "./UserForm.scss";

export function UserForm() {
  const history = useHistory();
  const { id } = useParams<EditUser>();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("masculin");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("MODERATOR");
  const [error, setError] = useState("");

  const userId = id ? parseInt(id) : null;
  const postQuery = useUserQuery(userId);

  const { mutate } = useMutation(
    (params: AddUser | PatchUser) =>
      id ? api.patchUser(parseInt(id), params) : api.addUser(params as AddUser),
    {
      onSuccess: () => history.push("/users"),
      onError: (error: any) => setError(error.response.data),
    }
  );

  function handleSubmit() {
    const userParams = id
      ? { fullName, email, gender, role }
      : { fullName, email, gender, role, password };
    mutate(userParams);
  }

  const roleSelectOptions = [
    { label: "Administrator", value: "ADMINISTRATOR" },
    { label: "Moderator", value: "MODERATOR" },
  ];

  useEffect(() => {
    if (!postQuery.data) return;
    const { fullName, email, gender, role } = postQuery.data;

    setFullName(fullName);
    setEmail(email);
    setGender(gender);
    setRole(role);
  }, [postQuery.data]);

  return (
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
  );
}
