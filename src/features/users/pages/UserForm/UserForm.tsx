import { useMutation } from "@tanstack/react-query";
import { useUserQuery } from "hooks/queries";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "api";
import { Button, Input, Select } from "components";
import { genderSelectOptions } from "config";
import { EditUser, PatchUser, Role } from "types";
import "./UserForm.scss";

interface UserFormParams {
  isEdit?: boolean;
}

export function UserForm({ isEdit = false }: UserFormParams) {
  const history = useHistory();
  const { id } = useParams<EditUser>();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("masculin");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("MODERATOR");

  const userId = isEdit ? parseInt(id) : null;
  const postQuery = useUserQuery(userId);

  const { mutate: createMutation } = useMutation(api.addUser, {
    onSuccess: () => history.push("/users"),
  });

  const { mutate: editMutation } = useMutation(
    (params: PatchUser) => api.patchUser(parseInt(id), params),
    { onSuccess: () => history.push("/users") }
  );

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

  if (postQuery.isLoading) return null;

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
        {isEdit ? (
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

        <Button
          variant="primary"
          onClick={() => {
            isEdit
              ? editMutation({ fullName, email, gender, role })
              : createMutation({ fullName, email, gender, role, password });
          }}
        >
          {isEdit ? "Edit" : "Create"}
        </Button>
      </div>
    </div>
  );
}
